import express, { application } from "express"
import cors from "cors"
import { afazeres } from "./data"

const app = express()

app.use(express.json())
app.use(cors())



// Ex #1 GET PING
app.get('/ping', (req, res) => {
    res.send('pong')
})

// Ex #2 CRIE VARIAVEL DO TIPO AFAZER 
type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Ex #3 CRIE UM ARRAY AFAZRES 
// const afazers = afazeres

// Ex #4 ENDPOINT PARA RETORNAR SOMENTE ARRAYS COMPLETOS OU PENDENTES 
app.get('/afazeres/completed/:boolean', (req, res) => {
    const afazeresLista: Afazer[] = afazeres.filter((afazer) => {
        if (req.params.boolean === "true") {
            return afazer.completed === true
        } else if (req.params.boolean === "false") {
            return afazer.completed === false
        }
    })
    res.status(200).send(afazeresLista)
})

// Ex #5 ENDPOINT PARA CRIAR AFAZERES
app.post('/createAfazer/:userId', (req, res) => {
    const body = req.body
    const newBodyObj: Afazer[] = { userId: Number(req.params.userId), ...body }
    const novoArrAfazer = [...afazeres, newBodyObj]

    res.status(201).send(novoArrAfazer)
})

// Ex #6 ENDPOINT PARA ATUALIZAR STATUS DO AFAZER 
app.put('/afazeres/update/:id', (req, res) => {
    const findUser = afazeres.filter((user) => {
        if (user.userId === Number(req.params.id)) {
            return true
        }
    })

    const changeStatus = findUser.filter((afazer?) => {
        if (afazer.id === Number(req.query.idAfazer))
            return afazer.completed = !(afazer.completed)
    })

    res.status(200).send(changeStatus)
})
// Ex #7 ENDPOINT PARA DELETAR AFAZER POR ID 
app.delete('/deletaAfazer/:idUser/:idAfazer', (req, res) => {
    const idAfazer: number = parseInt(req.params.idAfazer)
    const idUser: number = parseInt(req.params.idUser)

    const findUser = afazeres.filter((user) => {
        if (user.userId === idUser) {
            return true
        }
    }).filter((afazer) => {
        if (afazer?.id !== idAfazer) {
            return afazer
        }
    })

    res.status(200).send(findUser)
})
// Ex #8 ENDPOINT QUE RETORNA TODOS OS AFAZERES DE UM IDUSER
app.get('/afazers/:idUser', (req, res) => {
    const allAfazeres: Afazer[] = afazeres.filter((afazer) => {
        if (afazer?.userId === parseInt(req.params.idUser)) {
            return afazer
        }
    })
    res.status(200).send(allAfazeres)
})
// Ex #9 
// Ex #10 
// Ex #11 









app.listen(3003, () => {
    console.log("Server is running in port 3003")
})