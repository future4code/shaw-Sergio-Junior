import { UserData } from "../data/UserData";
import { UserModel } from "../model/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { GetUserByEmail } from "../types/getUserByEmail";
import { LoginInputDTO } from "../types/loginInputDTO";
import { LoginResponse } from "../types/loginResponse";
import { SignUpInputDTO } from "../types/signUpDTO";

export class UserBusiness {

    constructor(
        private userData: UserData,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private generateId: IdGenerator
    ) { }


    signUp = async (input: SignUpInputDTO): Promise<any> => {

        //  validacao 
        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Invalid fields.");
        }

        // conferir se usuario existe 
        const registeredUser = await this.userData.getUserByEmail(email)
        if (registeredUser) {
            throw new Error("This email already exists.");
        }

        // criar id service 
        const id: string = this.generateId.generateId()

        // hashear password
        const hashedPassword: string = await this.hashManager.hash(password)

        // criar user no banco 
        const user = new UserModel(
            id,
            name,
            email,
            hashedPassword
        )

        await this.userData.createUser(user)

        // criar o token 
        const token = this.authenticator.generateToken({ id })

        // retornar token 
        return token
    }

    login = async (input: LoginInputDTO): Promise<any> => {
        //  desestruturar o input e checar se estou recebendo tudo
        const { email, password } = input
        if (!email || !password) {
            throw new Error("Invalid fields.");
        }

        // conferir se é um email válido 
        const validUser: GetUserByEmail | undefined = await this.userData.getUserByEmail(email)
        if (!validUser) {
            throw new Error("Email is not valid.");
        }

        // comparar password 
        const comparePassword: boolean = await this.hashManager.compare(password, validUser.password)
        if (!comparePassword) {
            throw new Error("Unauthorized.");
        }

        // gerar token
        const token: string = this.authenticator.generateToken({ id: validUser.id })

        // desenvolver resposta que será enviada para o usuário
        const response: LoginResponse = {
            name: validUser.name,
            email: validUser.email,
            token
        }

        return response
    }
}