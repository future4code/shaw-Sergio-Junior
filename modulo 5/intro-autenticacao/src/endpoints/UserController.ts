import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { AuthenticatorData, user } from "../types";

export class userController {

    //-- ENDPOINT DE CRIAR USUÁRIO
    public createUser = async (req: Request, res: Response): Promise<any> => {
        try {

            const userDB = new UserDatabase()
            const { email, password } = req.body
            const user: user = await userDB.getByEmail(email)

            if (user) {
                throw new Error('Please, try another email.')
            }

            if (!email || !password) {
                throw new Error("Preencha os campos 'email' e 'password'.");
            }

            if (!email.includes("@")) {
                throw new Error("Insert a valid email format with '@'.");
            }

            if (password.lenght < 6) {
                throw new Error("Insert a valid password with at least 6 characters.");
            }

            const generateId = new GenerateId()
            const id: string = generateId.generateId()

            const newUser: user = { id, email, password }

            await userDB.createUser(newUser)

            const generateToken = new Authenticator()
            const token: string = generateToken.generateToken({ id })

            res.status(200).send({ newUser, token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.message })
            }
        }
    }

    public userLogin = async (req: Request, res: Response): Promise<any> => {
        try {

            const userDB = new UserDatabase()
            const { email, password } = req.body
            const user: user = await userDB.getByEmail(email)

            if (!email) {
                throw new Error("Please enter an email!");
            }

            if (password != user.password) {
                throw new Error("Invalid password.")
            }

            if (!user) {
                throw new Error("This email is not valid!");
            }

            if (!email.includes("@")) {
                throw new Error("Insert a valid email format with '@'.");
            }

            const authenticator = new Authenticator()
            const token: string = authenticator.generateToken({ id: user.id })

            res.status(200).send({ token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.message })
            }
        }
    }

    public userProfile = async (req: Request, res: Response): Promise<any> => {

        try {
            res.statusCode = 500
            
            const authenticator = new Authenticator();
            const data: AuthenticatorData = authenticator.getData(req.headers.authorization as string)

            if (!data) {
                res.statusCode = 404
                throw new Error("Headers is missing!");
            }

            const userDB = new UserDatabase()
            const user: user = await userDB.getById(data.id)

            res.status(200).send({
                user: {
                    id: user.id,
                    email: user.email
                }
            })

        } catch (error: any) {
            res.send({ message: error.message || "Internal server error" })
        }
    }

} 