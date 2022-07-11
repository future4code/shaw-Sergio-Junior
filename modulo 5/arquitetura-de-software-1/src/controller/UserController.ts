import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../data/UserDataBase";
import { user, userLogin } from "../model/UserModel";
import { AuthenticationData } from "../services/Authenticator";

export class UserController {
    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: user = {
                name, email, password, role
            }

            // isntanciar a classe business 
            const userBusiness = new UserBusiness()

            const token = await userBusiness.userSignUp(newUser)

            res.status(201).send({ message: "User created successfully.", token })
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }


    async logIn(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const newUser: userLogin = {
                email, password
            }

            // isntanciar a classe business 
            const userBusiness = new UserBusiness()

            const result = await userBusiness.userLogin(newUser)

            res.status(201).send(result)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            // isntanciar a classe business 
            const userBusiness = new UserBusiness()

            const result = await userBusiness.getAllUsers(token)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const input = {
                id: req.params.id as string,
                token: req.headers.authorization as string
            }

            // isntanciar a classe business
            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser(input)

            res.status(200).send({ message: "User deleted successfully." })
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

}