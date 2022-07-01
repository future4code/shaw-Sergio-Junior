import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { UserModel } from "../model/UserModel";
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

            if (role !== "NORMAL" && role !== "ADMIN") {
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
    // FOLLOW USER
    public followUser = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // pegar o id atraves do token data 
            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(token)

            // pegar o id do perfil desejado 
            const userToFollowId: string = req.body.userToFollowId

            // instanciar userDb e verificar id 
            const userDb = new UserDataBase()
            const validateId = await userDb.getUserById(userToFollowId)
            if (!validateId) {
                errorCode = 422
                throw new Error("You need to insert a valid id.");
            }

            // checar se n estou tentando me seguir
            if (userToFollowId === tokenData.id) {
                errorCode = 409
                throw new Error("Are you really trying to get followers like that? Seriously?");
            }
            // checar se já segue o usuário 
            const checkFollowedUser = await userDb.getFollowedUserById(userToFollowId, tokenData.id)
            if (checkFollowedUser.length > 0) {
                errorCode = 409
                throw new Error("You already follow this user.");
            }

            await userDb.followUser(userToFollowId, tokenData.id)

            res.status(200).send({ message: "Followed successfully" })
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // UNFOLLOW USER
    public unfollowUser = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // pegar o id atraves do token data 
            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(token)

            // pegar o id do perfil desejado 
            const userToUnfollowId: string = req.body.userToUnfollowId

            // instanciar userDb e verificar id 
            const userDb = new UserDataBase()
            const validateId = await userDb.getUserById(userToUnfollowId)
            if (!validateId) {
                errorCode = 422
                throw new Error("You need to insert a valid id.");
            }

            // checar se eu de fato sigo esse userid 
            const doIFollowU = await userDb.getFollowedUserById(userToUnfollowId, tokenData.id)
            if (!doIFollowU.length) {
                errorCode = 422
                throw new Error("You already donnot follow this dude.");
            }

            await userDb.unFollowUser(userToUnfollowId, tokenData.id)

            res.status(200).send({ message: "Unfollow successfully" })
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // DELETE USER
    public deleteUser = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            //id do user a deletar 
            const userId = req.params.id

            // gerar token data 
            const authorization = new Authenticator()
            const tokenData: AuthenticationData = authorization.getData(token)
            const loggedUserId: string = tokenData.id

            // instanciar e checar tipo de usuario 
            const userDB = new UserDataBase()
            const getUserToCheckRole = await userDB.getUserById(loggedUserId)

            if (getUserToCheckRole.getRole() !== "ADMIN" && getUserToCheckRole.getId() !== userId) {
                errorCode = 404
                throw new Error("Unauthorized!");
            }

            // checar se id n é de admin 
            const getUserToDeleRole = await userDB.getUserById(userId)
            if (getUserToDeleRole === undefined) {
                errorCode = 422
                throw new Error("UserId not valid, inser a valid userId!");
            }
            if (getUserToDeleRole.getRole() === "ADMIN" && getUserToDeleRole.getId() !== loggedUserId) {
                errorCode = 404
                throw new Error("Unauthorized! You cannot delete an ADMIN user even if you are an ADMIN.");
            }

            // DELETE USER 
            await userDB.deleteUser(userId)

            res.status(200).send("User successfully deleted.")
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
}