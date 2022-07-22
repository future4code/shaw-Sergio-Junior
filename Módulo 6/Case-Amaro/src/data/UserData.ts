import { CustomError } from "../error/CustomError";
import { GetUserByEmail, UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private TABLE_NAME = "user_amaro";

    public async createUser(user: UserModel) {
        try {

            const newUser = {
                id: user.getId(),
                email: user.getEmail(),
                user_name: user.getUserName(),
                password: user.getPassword(),
                role: user.getRole()
            }

            await this.getConnection()
                .insert(newUser)
                .into(this.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    public async getUserByEmail(email: string): Promise<GetUserByEmail> {
        try {

            const response: GetUserByEmail[] = await this.getConnection()
                .select()
                .from(this.TABLE_NAME)
                .where({ email: email })

            return response[0]

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.");
        }
    }

}