import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

const userTableName = "user_auth"

export class UserDatabase extends BaseDatabase {

    //- CRIAR USUARIO
    public createUser = async (newUser: user): Promise<void> => {
        await this.getConnection()
            .insert(newUser)
            .into(userTableName)
    }
    //- GET USER BY ID 
    public getById = async (id: string) => {
        const [result] = await this.getConnection()
            .select("*")
            .from(userTableName)
            .where({ id })
        return result
    }
    //- GET USER BY EMAIL 
    public getByEmail = async (email: string): Promise<user> => {
        const result = await this.getConnection()
            .select("*")
            .from(userTableName)
            .where({ email: email })
        return result[0]
    }
}