import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import connection from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/actor', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`SELECT * FROM Actor`)
        console.log(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EX 1  -------------------------------//-------------------------------------
// A) Resposta vem com um array contendo várias iformações
// que acabam não sendo muito relevantes para nós,
// por isso "filtramos" com posição que queremos. [0][0]
// B)
// GET ACTOR BY NAME 
const getActorByName = async (name: string): Promise<any> => {
    const [result] = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)
    return result
}
app.get('/actor/:name', async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        console.log(name)
        console.log(await getActorByName(name))
        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
// C)
// GET QUANTITY MALE - FEMALE 
const getGenderQuantity = async (gender: string): Promise<any> => {
    const [result] = await connection.raw(` 
    SELECT COUNT(*), gender FROM Actor 
    GROUP BY gender 
    `)
    return result
}
app.get('/actor_by_gender/:gender', async (req: Request, res: Response) => {
    try {
        const gender: string = req.params.gender
        console.log(await getGenderQuantity(gender))
        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EX 2 -------------------------------//-------------------------------------
// A) SALARIO E ID 
app.put("/update_salary/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary
            })
            .where('id', req.params.id)
        res.send("Salary updated!")
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
// B) DELETE BY ID 
app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .delete()
            .where('id', req.params.id)
        console.log("Actor deleted!")
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
// C) AVG SALARY BY GENDER
app.get('/avg_salary/:gender', async (req: Request, res: Response) => {
    try {
        const [result] = await connection("Actor")
            .avg("salary as salary")
            .where({ gender: req.params.gender })
        console.log(`${req.params.gender} average salary is : R$${result.salary}`)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EX 3 -------------------------------//-------------------------------------
// A) GET ACTOR BY ID
app.get("/actor_id/:id", async (req: Request, res: Response) => {
    try {
        const [result] = await connection("Actor")
            .select('*')
            .where({ id: req.params.id })
        console.log(result)
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
});
// B) ACTOR BY GENDER QUERY PARAMS
const countActors = async (gender: string): Promise<any> => {
    const [result] = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    return result
}
app.get('/actors/gender', async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string)
        console.log(`There is ${count[0].count} ${req.query.gender}`)
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
})

// EX 4 -------------------------------//-------------------------------------
// POST  
app.post("/actor", async (req: Request, res: Response) => {
    try {
        const result: { id: string, name: string, salary: number, birth_date: Date, gender: string } = {
            id: req.body.id,
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        }

        await connection("Actor").insert(result)
        console.log('Actor created successfully')
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
})
// A) Endpoint para atualizar salário com id
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .update({ salary: req.body.salary })
            .where({ id: req.params.id })
        console.log("Actor has been updated!")
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
})
// B) Endpoint para deletar ator da tabela
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor").delete()
            .where({ id: req.params.id })
        console.log("Actor has been deleted!")
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
})

// EX 5 -------------------------------//-------------------------------------
app.post("/movie", async (req: Request, res: Response) => {
    try {
        const result: {
            id: string,
            Título: string,
            sinopse: string,
            release_date: Date,
            rating: number
        } = {
            id: req.body.id,
            Título: req.body.Título,
            sinopse: req.body.sinopse,
            release_date: req.body.release_date,
            rating: req.body.rating
        }

        await connection('Movies').insert(result)

        console.log("Movie successfully created!")
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
})

// EX 6 -------------------------------//-------------------------------------
app.get('/movie/all', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`SELECT * FROM Movies LIMIT 15`)
        console.log(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EX 6 -------------------------------//-------------------------------------
app.get('/movie/search', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
    SELECT * FROM Movies 
    WHERE Título LIKE "%${req.query.search}%" OR sinopse LIKE "%${req.query.search}%"
    ORDER BY release_date ASC
    `)
        console.log(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

app.listen(3003, () => {
    console.log(`Server in running in http://localhost:3003`)
})