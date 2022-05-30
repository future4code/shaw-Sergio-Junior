import express from "express"
import cors from "cors"
import { users, posts } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// app.METHOD(PATH, arrow function(req,res))
app.get('/', (req, res) => {
    res.status(200).send('Working')
})

// GET PARA TODOS OS USERS 
app.get('/users', (req, res) => {
    res.status(200).send(users)
})

// GET PARA TODOS OS POSTS 
app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

// GET PARA POSTS DE USUARIO ESPECIFICO 
app.get('/posts/:userId', (req, res) => {
    const postsUser: Post[] = posts.filter((post) => {
        return post.userId === parseInt(req.params.userId)
    })

    if (!req.params.userId) {
        res.status(400).send("Entre com um ID válido")
    } else if (!postsUser.length) {
        res.status(401).send("Nenhum resultado encontrado")
    }

    res.status(200).send(postsUser)
})

// DELETE PARA APAGAR POST POR ID 
app.delete('/posts/:postId', (req, res) => {
    const postToDelete: Post[] = posts.filter((post) => {
        return post.id !== parseInt(req.params.postId)
    })

    if (!req.params.postId) {
        res.status(400).send("Entre com um ID válido")
    } else if (!postToDelete.length) {
        res.status(401).send("Nenhum resultado encontrado")
    }

    res.status(200).send(postToDelete)
})

// DELETE PARA APAGAR USUARIO   
app.delete('/users/:userId', (req, res) => {
    const usuarios: User[] = users.filter((user) => {
        return user.id !== parseInt(req.params.userId)
    })

    if (!req.params.userId) {
        res.status(400).send("Entre com um ID válido")
    } else if (!usuarios.length) {
        res.status(401).send("Nenhum resultado encontrado")
    }
    res.status(200).send(usuarios)
})

// LISTEN DA PORTA
app.listen(3003, () => {
    console.log("Rodando na porta 3003")
})


