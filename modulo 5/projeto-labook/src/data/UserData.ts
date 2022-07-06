import { UserModel } from "../model/UserModel";
import { GetUserByEmail } from "../types/getUserByEmail";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {

    protected TABLE_NAME = "labook_users"

    createUser = async (user: UserModel) => {
        try {
            await this.getConnection()
                .insert(user)
                .into(this.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getUserByEmail = async (email: string): Promise<GetUserByEmail | undefined> => {
        try {
            const [user]: GetUserByEmail[] = await this.getConnection()
                .select("*")
                .where({ email })
                .from(this.TABLE_NAME)
            return user
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }
}