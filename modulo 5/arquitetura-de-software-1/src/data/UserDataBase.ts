import { user, userLogin } from "../model/UserModel";
import { BaseDataBase } from "./BaseDataBase";

const tableName = "User_Arq"

export class UserDataBase extends BaseDataBase {

    // criar usuário
    async createUser(user: user) {
        await this.getConnection()
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }).into(tableName)
    }
    // pegar user por email 
    async getUserByEmail(userEmail: string) {
        const [result] = await this.getConnection()
            .select("*").from(tableName).where({ email: userEmail })

        return result
    }

    // login 
    async logIn(user: userLogin) {
        const [result] = await this.getConnection()
            .select("*")
            .from(tableName)
            .where({ email: user.email })

        return result
    }

    // get all users 
    async getAllUsers() {
        let users: any = []
        const result = await this.getConnection()
            .select("*")
            .from(tableName)

        for (let user of result) {
            users.push(user)
        }

        return users
    }

    async deleteUser(userId: string) {
        await this.getConnection()
            .delete()
            .from(tableName)
            .where({ id: userId })
    }
}