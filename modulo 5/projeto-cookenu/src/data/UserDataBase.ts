import { UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";

const userTableName: string = "users_cookenu"

export class UserDataBase extends BaseDatabase {

    // CREATE USER 
    public createUser = async (newUser: UserModel) => {
        try {
            await this.getConnection()
                .insert({
                    id: newUser.getId(),
                    name: newUser.getName(),
                    email: newUser.getEmail(),
                    password: newUser.getPassword(),
                    role: newUser.getRole()
                })
                .into(userTableName)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getUserById = async (id: string): Promise<UserModel> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(userTableName)
                .where({ id })

            return result[0] && UserModel.toUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getByEmail = async (email: string): Promise<UserModel> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(userTableName)
                .where({ email })

            return result[0] && UserModel.toUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}