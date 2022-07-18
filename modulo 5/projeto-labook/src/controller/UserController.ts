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

    makeFriends = async (req: Request, res: Response) => {
        // preciso auth? sim!  
        const token: string = req.headers.authorization as string

        // recebo mais alguma coisa? sim o id do usuario que quero seguir
        const { userToHaveFriendshipId } = req.body

        // conversar com o business para solicitar algo
        try {

            const response: string = await this.userBusiness.makeFriends(token, userToHaveFriendshipId)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    removeFriendship = async (req: Request, res: Response) => {
        // pegar dados do front 
        const token: string = req.headers.authorization as string
        const { userToRemoveFriendshipId } = req.body

        try {
            const response: string = await this.userBusiness.removeFriendship(token, userToRemoveFriendshipId)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}