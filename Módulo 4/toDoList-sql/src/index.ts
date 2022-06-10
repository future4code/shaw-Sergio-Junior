import express, { Express, Request, response, Response } from "express";
import cors from "cors";
import { connection } from "./connection";
import { CreateUser, GetUserById, CreateTask } from "./types";


const app: Express = express();

app.use(express.json());
app.use(cors());

let errorCode = 400

// 6 - Get all Users
app.get("/users", async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection("Users")
            .select("*")
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

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
        const [result]: GetUserById[] = await connection("Users")
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
app.get("/tasks", async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection("Tasks").select("*")
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 4 - Criar tarefa
app.post('/task', async (req: Request, res: Response): Promise<any> => {
    try {

        const { id, title, description, due_Date, creator_user_id }: CreateTask = {
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            due_Date: req.body.dueDate.split('/').reverse().join('/'),
            creator_user_id: req.body.creatorUserId
        }

        if (!id || !title || !description || !due_Date || !creator_user_id) {
            errorCode = 422
            throw new Error("Please check your title, your description, your creatorUserId or your dueDate!");
        }

        await connection("Tasks").insert({ id, title, description, due_Date, creator_user_id })
        res.status(201).send("Task created!")
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 5 - Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        let [result] = await connection("Tasks").select("*").where("id", req.params.id)
        if (!result) {
            errorCode = 422
            throw new Error("Please check if your task 'id' is correct!");
        }

        const date = `${result.due_Date.getDate()}/${result.due_Date.getMonth()}/${result.due_Date.getFullYear()}`

        let newResult = { ...result, due_Date: date }
        res.status(200).send(newResult)
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

// 19 - Deletar tarefa (parcial)
app.delete('/task/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        await connection("Tasks").delete().where("id", req.params.id)
        res.status(200).send("Task deleted!")
    } catch (error: any) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})



app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`)
})