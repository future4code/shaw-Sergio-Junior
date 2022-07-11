import { IdGenerator } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { user, userLogin } from "../model/UserModel";
import { UserDataBase } from "../data/UserDataBase";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { hash } from "bcryptjs";

export class UserBusiness {
    // aqui serão as regras de negócio 
    async userSignUp(user: user) {
        // primeiro preciso receber um usuário
        const { name, email, password, role } = user

        // esse usuário precisa estar completo
        if (!email || !name || !password || !role) {
            throw new Error('Check the fields "name","email", "role" and "password"')
        }

        // entao gero um id para ele 
        const generateId = new IdGenerator()
        const id: string = generateId.generateId()
        // agora fazer o hash da senha 
        const hashManager = new HashManager()
        const hash: string = await hashManager.hash(password)

        // enviar criacao de user para o bd 
        const userToReq = { id: id, name, email, password: hash, role }
        const userDB = new UserDataBase()
        const createUser = userDB.createUser(userToReq)

        // geracao do token
        const authenticator = new Authenticator()
        const token: string = authenticator.generateToken({ id, role })

        return token
    }

    async userLogin(user: userLogin) {
        const { email, password } = user

        if (!email || !password) {
            throw new Error('Check the fields "email" and "password"')
        }

        const userDB = new UserDataBase()
        const validateUser: user = await userDB.getUserByEmail(email)

        // comparar senhas 
        const hashManager = new HashManager()
        const comparePassword: boolean = await hashManager.compare(password, validateUser.password)

        if (comparePassword === false) {
            throw new Error("Unauthorized.");
        }

        const userLogged: user = await userDB.logIn(user)

        const authenticator = new Authenticator()
        const token: string = authenticator.generateToken({ id: userLogged.id as string, role: userLogged.role })

        return {
            user: {
                id: userLogged.id as string,
                role: userLogged.role,
                token: token
            }
        }
    }

    async getAllUsers(token: string) {
        const authorization = token

        // geracao do token data
        const authenticator = new Authenticator()
        const tokenData: AuthenticationData = authenticator.getData(authorization)

        if (!tokenData) {
            throw new Error("Your token is not valid.");
        }

        const userDB = new UserDataBase()
        const result: user[] = await userDB.getAllUsers()

        return result
    }

    async deleteUser(inputUser: { id: string, token: string }) {

        // esse usuário precisa estar completo
        if (!inputUser.id || !inputUser.token) {
            throw new Error('Check your path params and headers!')
        }

        // get token data
        const authenticator = new Authenticator()
        const tokenData: AuthenticationData = authenticator.getData(inputUser.token)

        if (tokenData.role !== "ADMIN") {
            throw new Error("Unauthorized.");
        }

        // enviar deleçao de user para o bd 
        const userDB = new UserDataBase()
        return await userDB.deleteUser(inputUser.id)

    }
}