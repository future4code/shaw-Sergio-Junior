import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { UserModel, UserRole } from "../model/UserModel";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserController {

    // CREATE USER ENDPOINT
    public createUser = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // desestruturando o user que está vindo pelo body
            const { name, email, password, role } = req.body

            if(role && role !== UserRole){
                errorCode = 422 
                throw new Error('Role must to be "NORMAL" or "ADMIN" one');
            }

            // verificaçoes do body
            if (!name || !email || !password) {
                errorCode = 422
                throw new Error(
                    `All fiels are required! 
                Correct format: name as string, email as string,
                password as string and role as 'NORMAL' or 'ADMIN'.`
                );
            }

            // password no minimo 6 chars
            if (password.length < 6) {
                errorCode = 422
                throw new Error("Password must have at least 6 characters.");
            }

            // criar id 
            const generateId = new GenerateId()
            const id: string = generateId.generateId()

            // verificar usuario existente 
            const userDB = new UserDataBase()
            const user: UserModel = await userDB.getByEmail(email)
            if (user) {
                errorCode = 409
                throw new Error("This email already exists!");
            }

            // instanciar a classe hashmanager // fazer hash do password 
            const hashManager = new HashManager()
            const hash: string = await hashManager.hash(password)

            // criando user, criacao direta  
            const newUser = new UserModel(id, name, email, hash, role)
            await userDB.createUser(newUser)

            // instanciar classe
            const generateToken = new Authenticator()
            // criar token 
            const token: string = generateToken.generateToken({ id, role })

            // retorna message and token 
            res.status(200).send({
                message: "User successfully created!",
                newUser: { id, email, role }, token
            })
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // CREATE USERLOGIN ENDPOINT
    public userLogin = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // desestruturando o user que está vindo pelo body
            const { email, password } = req.body

            // verificaçoes do body
            if (!email || !password) {
                errorCode = 422
                throw new Error(
                    `All fiels are required! 
                     Correct format: email as string and password as string.`
                );
            }

            // verificar usuario existente 
            const userDB = new UserDataBase()
            const user: UserModel = await userDB.getByEmail(email)
            if (!user) {
                errorCode = 409
                throw new Error("This email does not exist!");
            }

            //comparar senhas 
            const hashManager = new HashManager()
            const comparePassword = await hashManager.compare(password, user.getPassword())
            if (!comparePassword) {
                errorCode = 404
                throw new Error("Unhnautorized. Verify your email and password.");
            }

            //-/ criar token
            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id: user.getId(), role: user.getRole() })

            res.status(200).send({
                message: "Login successed.",
                token
            })

        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // GET OWN PROFILE ENDPOINT
    public userProfile = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pega o token do headers
            const token = req.headers.authorization

            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // pegar o token data 
            const authorization = new Authenticator()
            const tokenData = authorization.getData(token)

            // instanciar userDb e pegar user solicitado 
            const userDb = new UserDataBase()
            const getUser: UserModel = await userDb.getUserById(tokenData.id)

            res.status(200).send({
                id: getUser.getId(),
                name: getUser.getName(),
                email: getUser.getEmail()
            })

        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // GET PROFILE BY ID ENDPOINT
    public getProfiles = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // pegar o id do perfil desejado 
            const id: string = req.params.id

            // instanciar userDb e verificar id 
            const userDb = new UserDataBase()
            const validateId = await userDb.getUserById(id)
            if (!validateId) {
                errorCode = 422
                throw new Error("You need to insert a valid id.");
            }

            // aqui poderia ser implementado o tipo de role
            const authorization = new Authenticator()
            // error interno se n houver token data
            const tokenData: AuthenticationData = authorization.getData(token)


            const getUser: UserModel = await userDb.getUserById(id)

            res.status(200).send({
                id: getUser.getId(),
                name: getUser.getName(),
                email: getUser.getEmail()
            })

        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }

}