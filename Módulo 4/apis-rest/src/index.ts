import express, { Express, query, Request, Response } from "express"
import cors from "cors"
import { users } from "./data/data"
import { TypeUser, Type, Body } from "./types"

const app: Express = express()

app.use(express.json())
app.use(cors())


// EX #1
// a. Qual método HTTP você deve utilizar para isso?
// app.get é o método utilizado nessa requisição 
// b. Como você indicaria a **entidade** que está sendo manipulada?
// indicaria como users no path 
app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

// EX #2
// a. Como você passou os parâmetros de type para a requisição? Por quê?
// Passei através de um body, achei mais intuitivo do que passar por params ou query
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// atraves da tipagem do objeto user com um ENUM. 
app.get('/users/type', (req: Request, res: Response) => {
    let errorCode: number = 400
    const userType: string = req.body.type
    try {
        if (!userType) {
            errorCode = 404
            throw new Error(" 'Body' not found. Please enter a 'body'. ");
        }

        const checkUserType: TypeUser[] = users.filter((user) => {
            return user.type.toLowerCase() === userType.toLocaleLowerCase()
        })

        if (!checkUserType.length) {
            errorCode = 422
            throw new Error("Please enter a valid Type");
        }
        res.status(200).send(checkUserType)
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message })
    }
})

// EX #3 
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Acredito que possa ser utilizado path params ou então  query, utilizei query. 
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
// Feito
app.get('/users/name', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userName: string = req.query.name as string
        if (userName === ":name" || !userName) {
            errorCode = 404
            throw new Error("Query params not found, please insert a 'query param'.");
        }
        const findUserByName: TypeUser | undefined = users.find((user) => user.name.toLowerCase() === userName.toLowerCase())
        if (!findUserByName || findUserByName === undefined) {
            errorCode = 422
            throw new Error("User name not found, please try again.");
        }
        res.status(200).send(findUserByName)

    } catch (err: any) {
        res.status(errorCode).send({ message: err.message })
    }
})

// EX #4 
// a. Mude o método do endpoint para `PUT`. O que mudou?
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// Nesse caso não mudará nada, porém não é utilizado o put para adicionar usuario por boas praticas. 
app.post('/createUser', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const token: string = req.headers.authorization as string
        const { name, email, age }: Body = req.body
        const findUserName = users.find((user) => user.name === req.body.name)
        const findUserEmail = users.find((user) => user.email === req.body.email)
        let authorization = Type.normal

        //-- validando se há os campos preenchidos
        if (!name || !email || !age || (!name && !email && !age)) {
            errorCode = 404
            throw new Error("Parameter not found, check your fields.");
        }

        //-- validando tipo dos campos
        if (typeof name !== "string" || typeof email !== "string" || (typeof age !== "number" || age <= 0)) {
            errorCode = 422
            throw new Error("Parameter type is wrong, check your parameters.");
        }

        //-- checando maioridade
        if (age < 18) {
            errorCode = 403
            throw new Error("You must be at least 18yrs old! Come back in a few years.");
        }

        //-- definir authorization
        if (token) {
            authorization = Type.admin
        } else {
            authorization = Type.normal
        }

        //-- verificação teste para nome
        if (findUserName) {
            errorCode = 409
            throw new Error("User name has already been taken. Try another name.");
        }

        //-- verificação teste para email
        if (findUserEmail) {
            errorCode = 409
            throw new Error("User email has already been taken. Try another email.");
        }

        const newUser = { name, email, age, id: Number(Date.now()), type: authorization }
        users.push(newUser)

        //-- retorna array users atualizado
        res.status(201).send(users)
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message })
    }
})

const server = app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})