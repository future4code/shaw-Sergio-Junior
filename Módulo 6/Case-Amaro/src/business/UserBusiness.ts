import { UserDatabase } from "../data/UserData"
import { CustomError } from "../error/CustomError"
import { GetUserByEmail, LoginInputDTO, UserInputDTO, UserModel, USER_ROLE } from "../model/UserModel"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private hashManager = new HashManager,
        private authenticator = new Authenticator,
        private idGenerator = new IdGenerator,
        private userDB = new UserDatabase
    ) { }

    signUp = async (newUser: UserInputDTO) => {
        const { userName, password, email, role } = newUser

        try {
            if (!userName || !password || !role || !email) {
                throw new CustomError(422, "Some field is missing.")
            }
            if (password.length < 6) {
                throw new CustomError(422, "Password needs at least 6 characters.");
            }
            if (role.toUpperCase() !== USER_ROLE.ADMIN && role.toUpperCase() !== USER_ROLE.NORMAL) {
                throw new CustomError(422, "Role must be 'ADMIN' or 'NORMAL'.");
            }

            const hash: string = await this.hashManager.hash(password)
            const id: string = this.idGenerator.generate()

            const user = new UserModel(id, userName, hash, email, role)

            await this.userDB.createUser(user)

            const token: string = this.authenticator.generateToken({ id, role })

            return token
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    login = async (userLogin: LoginInputDTO) => {
        const { email, password } = userLogin

        try {
            if (!email || !password) {
                throw new CustomError(422, "Some field is missing.");
            }

            const getUserToCompare: GetUserByEmail = await this.userDB.getUserByEmail(email)
            if (!getUserToCompare) {
                throw new CustomError(422, "User not found.");
            }

            const verifyPassword: boolean = await this.hashManager.compare(password, getUserToCompare.password)
            if (verifyPassword === false) {
                throw new CustomError(404, "Unauthorized.");
            }

            const token: string = this.authenticator.generateToken({ id: getUserToCompare.id, role: getUserToCompare.role })


            return token
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }

    }
}