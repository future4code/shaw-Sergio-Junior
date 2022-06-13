import express, { Express, Request, response, Response } from "express";
import cors from "cors";
import { connection } from "./connection";
import { CreateUser, GetUserBy, CreateTask, GetTask, CreateResponsible, GetResponsibleUserById } from './types';
import { read } from "fs";

const app: Express = express();

app.use(express.json());
app.use(cors());

let errorCode: number = 400

// 1 - Criar usuário 
app.post('/user', async (req: Request, res: Response): Promise<any> => {
    try {
        const result: CreateUser = {
            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        if (!req.body.name || !req.body.nickname || !req.body.email) {
            errorCode = 422
            throw new Error("Please check your name, your email or your nickname!");
        }

        await connection("Users").insert(result)
        res.status(201).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 2 - Pegar usuário pelo id
app.get('/user/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const [result]: GetUserBy[] = await connection("Users")
            .select("id", "nickname")
            .where({ id: req.params.id })

        if (!result) {
            errorCode = 422
            throw new Error("Users not find, try another id!");
        }

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 3 - Editar usuário
app.put('/user/edit/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.body.name || !req.body.nickname) {
            errorCode = 422
            throw new Error("Please check your name or your nickname!");
        }

        await connection("Users")
            .update({
                name: req.body.name,
                nickname: req.body.nickname
            })
            .where('id', req.params.id)

        res.status(200).send("User updated!")
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 4.0 - Get all tasks
// app.get("/tasks", async (req: Request, res: Response): Promise<any> => {
//     try {
//         const result = await connection("Tasks").select("*")
//         res.status(200).send(result)
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(errorCode).send(error.message)
//     }
// })

// 4 - Criar tarefa
app.post('/task', async (req: Request, res: Response): Promise<any> => {
    try {

        const { id_task, title, description, due_Date, creator_user_id }: CreateTask = {
            id_task: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            due_Date: req.body.dueDate.split('/').reverse().join('/'),
            creator_user_id: req.body.creatorUserId
        }

        if (!id_task || !title || !description || !due_Date || !creator_user_id) {
            errorCode = 422
            throw new Error("Please check your title, your description, your creatorUserId or your dueDate!");
        }

        await connection("Tasks").insert({ id_task, title, description, due_Date, creator_user_id })
        res.status(201).send("Task created!")
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 5 - Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        let [result]: GetTask[] = await connection("Tasks").select("*").where("id_task", req.params.id)
        if (!result) {
            errorCode = 422
            throw new Error("Please check if your task 'id' is correct!");
        }

        let dateUnformated: Date = result.due_Date as Date
        const date: string = `${dateUnformated.getDate()}/${dateUnformated.getMonth()}/${dateUnformated.getFullYear()}`

        let newResult: GetTask = { ...result, due_Date: date }
        res.status(200).send(newResult)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 6 - Get all Users
app.get("/users", async (req: Request, res: Response): Promise<any> => {
    try {
        const result: GetUserBy[] = await connection("Users")
            .select("*")
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 7 - Pegar tarefas criadas por um usuário
app.get('/task', async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.query.creatorId) {
            errorCode = 422
            throw new Error("Please check your query, probably your CreatorId is wrong!");
        }

        let result: GetTask[] = await connection("Tasks")
            .select('*').where({ 'creator_user_id': req.query.creatorId })

        if (result.length === 0) {
            result = []
            console.log("Empty array!")
        }

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 8 - Pesquisar usuário 
app.get('/user', async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.query.searchUser) {
            errorCode = 422
            throw new Error("Please check your query, probably your 'searchUser' is wrong!");
        }
        let [result]: GetUserBy[] = await connection.raw(`
        SELECT id, nickname FROM Users 
        WHERE (nickname LIKE '%${req.query.searchUser}%' OR email LIKE '%${req.query.searchUser}%') 
        `)
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 9 - Atribuir um usuário responsável a uma tarefa
app.post('/task/responsible', async (req: Request, res: Response): Promise<any> => {
    try {

        if (!req.body.taskId || !req.body.responsibleUser) {
            errorCode = 422
            throw new Error("Please check your taskId or your responsibleUser!");
        }

        const result: CreateResponsible = {
            task_id: req.body.taskId,
            responsible_user_id: req.body.responsibleUser
        }

        await connection("ResponsibleUser")
            .insert(result)

        res.status(200).send("Responsible user created!")
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 10 - Pegar usuários responsáveis por uma tarefa
app.get('/task/:id/responsible', async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.params.id) {
            errorCode = 422
            throw new Error("Task id missing!");
        }

        const result = await connection.raw(`
        SELECT id, nickname FROM Tasks 
        JOIN ResponsibleUser ON ${req.params.id} = ResponsibleUser.task_id
        JOIN Users ON ResponsibleUser.responsible_user_id = Users.id
        `)

        if (!result[0].length) {
            errorCode = 422
            throw new Error("Please check your TaskID");
        }

        res.status(200).send(result[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 11 - Pegar tarefa pelo id e os responsáveis por ela
// app.get('/task/:id/responsiblesTask', async (req: Request, res: Response): Promise<any> => {
//     try {
//         const result = await connection.raw(`
//         SELECT * FROM Tasks 
//         `)

//         console.log(result)
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(errorCode).send(error.message)
//     }
// })

// 12 - Atualizar o status da tarefa pelo id
app.put("/task/status/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.params.id || !req.body.status) {
            errorCode = 422
            throw new Error("Please, check your params and body!");
        }

        await connection("Tasks")
            .update({
                status: req.body.status
            })
            .where("id_task", req.params.id)

        res.status(200).send("Task status updated")
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 13 - 
app.get("/tasks", async (req: Request, res: Response): Promise<any> => {
    try {

        if (!req.query.status) {
            errorCode = 422
            throw new Error("Please, check your query status!");
        }

        let result: GetTask[] = await connection("Tasks")
            .select("*")
            .where({ status: req.query.status })

        if (!result.length) {
            errorCode = 422
            throw new Error("Please, check your query status!");
        }

        let newResult: GetTask[] = result.map((item) => {
            let date = item.due_Date as Date
            return {
                ...item,
                due_Date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
            }
        })

        res.status(200).send(newResult)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 14 - 
app.get("/tasks/delayed", async (req: Request, res: Response): Promise<any> => {
    try {
        let [result]: GetTask[] = await connection.raw(`
        SELECT * FROM Tasks 
        WHERE due_Date < CURDATE()
        `)
        if (![result].length) {
            errorCode = 422
            throw new Error("Please, check your tasks due_Date, probably you donnot have any dalayed tasks!");
        }

        // let date = new Date(result.due_Date)
        // let newDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})
// 15 - 


// 16 - 

// 17 - 

// 18 - 

// 19 - Deletar tarefa (parcial)
// app.delete('/task/:id', async (req: Request, res: Response): Promise<any> => {
//     try {
//         await connection("Tasks").delete().where("id_task", req.params.id)
//         res.status(200).send("Task deleted!")
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(errorCode).send(error.message)
//     }
// })



app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`)
})