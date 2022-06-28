import express, { Express, Request, Response } from "express";
import cors from "cors"
import { users } from "./data/data";
import { Balance, BankStatement, NewUser, Transfer, User } from "./types";

const app: Express = express()

app.use(express.json())
app.use(cors())

const getDate: string = new Date().toLocaleDateString()
const todayDate: number = Date.parse(getDate)
// 18 anos em milisegundos
const appropriateAge: number = 568036800000

//-- Get All Users - controle
app.get('/users', (req: Request, res: Response) => {
    try {
        const token = req.headers.auth

        if (!token) {
            throw new Error("You are not allowed to see this. Enter a valid token!");
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.status(401).send(error.message)
    }
})
//-- CRIAR CONTA  
app.post('/createUser', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const newUser: NewUser = req.body
        const birthDate: number = Date.parse(newUser.birthDate)
        //-- checa formato da data idade  
        if (!Date.parse(newUser.birthDate)) {
            errorCode = 422
            throw new Error("Please enter a date in the following format 'mm/dd/yyyy'");
        }
        //-- Checar idade do usuário
        if ((todayDate - birthDate) < appropriateAge) {
            errorCode = 403
            throw new Error("Age must to be 18 at least!");
        }
        //-- Checar CPF por type
        if (typeof newUser.SIN !== "string") {
            errorCode = 422
            throw new Error("SIN is invalid, check your parameter");
        }
        //-- Checar CPF se contém todos os caracteres (14) - patterns no front - adicionar regex CPF 
        if (newUser.SIN.length != 14) {
            errorCode = 422
            throw new Error("Your SIN number must be in this format '000.000.000-00'.");
        }
        //-- Criar variável e checar CPF por números - regex 
        const sinNumbers: string = newUser.SIN.replace(/[\s.-]*/igm, '')
        if (!sinNumbers || sinNumbers.length !== 11) {
            errorCode = 422
            throw new Error("SIN is invalid, check your parameter")
        }
        //-- Buscar sin number nos dados e checar CPF já existente
        const findSIN: User | undefined = users.find((user) => user.SIN === newUser.SIN)
        if (findSIN) {
            errorCode = 409
            throw new Error("SIN number already exists, please check your SIN number.");
        }
        //-- Criar então o novo usuário
        const createNewUser: User = { ...newUser, balance: 0, bankStatement: [] }
        //-- adicionando novo usuario nos dados do sistema
        users.push(createNewUser)
        //--Response
        res.status(201).send(createNewUser)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})
//-- CHECAR SALDO DA CONTA 
app.get('/balance', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const token = req.headers.auth
        const body: Balance = req.body
        //-- checa token
        if (!token) {
            errorCode = 401
            throw new Error("You are not allowed to see this. Enter a valid token!");
        }
        //-- checando se está recebendo o body
        if (!body.name || !body.SIN) {
            errorCode = 401
            throw new Error("You don not have access! Check your body parameters.");
        }
        //-- checando os types
        if (typeof body.name != "string" || typeof body.SIN != "string") {
            errorCode = 422
            throw new Error("Invalid parameters, check it out.");
        }
        //-- procurando usuario
        const findUser: User | undefined = users.find((user) => {
            if (user.SIN === body.SIN && user.name === body.name) {
                return user.balance
            }
        })
        //-- check se não encontrar user
        if (!findUser) {
            errorCode = 422
            throw new Error("Please, check your name and SIN number, something went wrong.");
        }
        //-- atualizando saldo na conta
        const checkBalance: string = `Your balance is: R$${findUser.balance.toFixed(2)}`
        //-- response
        res.status(200).send(checkBalance)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})
//-- ADICIONAR SALDO NA CONTA
app.put('/addBalance', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const token = req.headers.auth
        let { name, SIN, balance }: Balance = req.body
        //-- checar token
        if (!token) {
            errorCode = 401
            throw new Error("You are not allowed to see this. Enter a valid token!");
        }
        //-- checar se campos estão sendo passados 
        if (!name || !SIN) {
            errorCode = 401
            throw new Error("You donnot have access! Check your body.");
        }
        //-- checar os tipos dos campos passados
        if (typeof name != "string" || typeof SIN != "string" || typeof balance != "number") {
            errorCode = 422
            throw new Error("Invalid parameters, check it out.");
        }
        //-- checar valor do balance a ser adicionado 
        if (balance < 0) {
            errorCode = 422
            throw new Error("Balance has to be a positive number, bigger than zero.");
        }
        //-- encontrar usuário
        const findUser: User | undefined = users.find((user) => (user.SIN === SIN && user.name === name))
        // checar se há algum usuário
        if (!findUser) {
            errorCode = 422
            throw new Error("Please check your name and SIN number, something went wrong.");
        }
        //-- Adicionando saldo 
        const addBalance: User = { ...findUser, balance: findUser.balance + balance }
        //-- response 
        res.status(200).send(addBalance)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})
//-- PAGANDO CONTAS 
app.put('/payBills', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const token = req.headers.auth
        let { value, date, description, SIN }: BankStatement = req.body
        let userAccount: User | undefined = users?.find((user) => user.SIN === SIN)
        //-- checar token
        if (!token) {
            errorCode = 401
            throw new Error("You are not allowed to see this. Enter a valid token!");
        }
        //-- checar se tem autorização
        if (!userAccount) {
            errorCode = 401
            throw new Error("User account doesnt match. Please check your SIN number.");
        }
        //-- checar saldo na conta vs valor da conta 
        if (userAccount.balance < value) {
            errorCode = 422
            throw new Error("Your balance is not enough to pay this bill");
        }
        if (!Date.parse(date)) {
            errorCode = 422
            throw new Error("Please enter a date in the following format 'mm/dd/yyyy'");
        }
        //-- checar se campos estão sendo passados 
        if (!value || !description) {
            errorCode = 401
            throw new Error("You donnot have access! Check your body.");
        }
        //-- checa value negativo
        if (value < 0) {
            errorCode = 422
            throw new Error("Value must to be bigger than 0. Check the field value.");
        }
        //-- data automatica 
        if (!date) {
            date = getDate
        }
        //-- checar os tipos dos campos passados
        if (typeof description != "string" || typeof value != "number") {
            errorCode = 422
            throw new Error("Invalid parameters, check it out.");
        }
        // checar se o vencimento  da conta é válido
        if (Date.parse(date) < todayDate) {
            errorCode = 422
            throw new Error("Please enter a real expire date.");
        }
        //-- atualiza conta pós pagamento
        const payBill: User = {
            ...userAccount, balance: userAccount.balance - value,
            bankStatement: [...userAccount.bankStatement,
            { value: - value, description: description, date: date }]
        }
        //-- response
        res.status(200).send(payBill)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})
//-- TRANSFERINDO MONEY 
app.put('/transfers', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const token = req.headers.auth
        const { nameFrom, SINFrom, nameTo, SINTo, value }: Transfer = req.body
        if (!token) {
            errorCode = 401
            throw new Error("You are not allowed to see this. Enter a valid token!");
        }
        //-- checando se tudo está sendo passsado
        if (!nameFrom || !SINFrom || !nameTo || !SINTo || !value) {
            errorCode = 422
            throw new Error("Check your parameters, something is missing.");
        }
        //-- checando o value 
        if (typeof value !== "number") {
            errorCode = 422
            throw new Error("Check your value, it must be a number.");
        }
        //-- checa value negativo
        if (value < 0) {
            errorCode = 422
            throw new Error("Value must to be bigger than 0. Check the field value.");
        }
        //-- localizando usuários para fazer a ted
        const userFrom: User | undefined = users.find((user) => (user.SIN === SINFrom && user.name === nameFrom))
        //-- checar se usuario sin ta correto
        if (!userFrom) {
            errorCode = 422
            throw new Error("Sorry, we couldnt have found your SIN.");
        }
        //-- checar saldo em conta 
        if (userFrom.balance < value) {
            errorCode = 401
            throw new Error("You do not have enough funds.");
        }
        //-- localizando usuários para receber a ted
        const userTo: User | undefined = users.find((user) => (user.SIN === SINTo && user.name === nameTo))
        //-- checar se usuario destino sin ta correto
        if (!userTo) {
            errorCode = 422
            throw new Error("Sorry, we couldnt have found your destiny User SIN.");
        }
        //-- atualizando conta do usuário que fez a ted
        const newUserFrom: User = {
            ...userFrom, balance: userFrom.balance - value,
            bankStatement: [...userFrom.bankStatement, { value: - value, description: `Transfer to ${userTo.name}`, date: getDate }]
        }

        res.status(200).send(newUserFrom)
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})
//-- LISTEN
app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`)
})

