import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignUpInputDTO } from "../types/signUpDTO";

export class UserController {

    // CONSTRUCTOR DA CLASSE 
    constructor(
        private userBusiness: UserBusiness
    ) { }

    // METODOS DA CLASSE 
    signUp = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignUpInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.signUp(input)
            console.log("token", token)
            res.status(201).send({ message: "User created.", token })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        // receber o necessário por parametro
        const { email, password } = req.body

        // montar o que será mandado para o business (solicitacao)
        const input: LoginInputDTO = {
            email, password
        }

        // conversar com o business e esperar uma resposta para devolver ao usuario
        try {

            const user = await this.userBusiness.login(input)

            res.status(200).send({ message: "Success.", user })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}