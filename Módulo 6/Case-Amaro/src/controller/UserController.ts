import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/UserModel";

export class UserController {
    constructor(
        private userBusiness = new UserBusiness
    ) { }

    signUp = async (req: Request, res: Response) => {
        const { userName, password, email, role } = req.body
        const newUser: UserInputDTO = {
            userName,
            password,
            email,
            role
        }

        try {

            const token = await this.userBusiness.signUp(newUser)
            res.status(201).send({ message: "User has been created.", token: token })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }

    }

    login = async (req: Request, res: Response) => {
        const { email, password } = req.body
        const userLogin: LoginInputDTO = { email, password }

        try {

            const token: string = await this.userBusiness.login(userLogin)
            res.status(201).send({ message: "Success.", token: token })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }
}