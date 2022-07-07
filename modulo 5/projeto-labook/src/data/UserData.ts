import { UserModel } from "../model/UserModel";
import { GetUserByEmail } from "../types/getUserByEmail";
import { GetUserById } from "../types/getUserById";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {

    protected USERS_TABLE_NAME = "labook_users"
    protected USER_FRIENDS_TABLE = "user_friends"

    createUser = async (user: UserModel) => {
        try {
            await this.getConnection()
                .insert(user)
                .into(this.USERS_TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    makeFriends = async (userToHaveFriendshipId: string, userId: string): Promise<any> => {
        try {
            await this.getConnection()
                .insert({
                    user_id: userId,
                    friend_id: userToHaveFriendshipId
                })
                .into(this.USER_FRIENDS_TABLE)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    removeFriendship = async (userId: string, userToRemoveFriendshipId: string): Promise<any> => {
        try {
            await this.getConnection()
                .delete()
                .where("user_id", userId).andWhere("friend_id", userToRemoveFriendshipId)
                .from(this.USER_FRIENDS_TABLE)
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getUserByEmail = async (email: string): Promise<GetUserByEmail | undefined> => {
        try {
            const [user]: GetUserByEmail[] = await this.getConnection()
                .select("*")
                .where({ email })
                .from(this.USERS_TABLE_NAME)
            return user
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getUserById = async (id: string): Promise<GetUserById | undefined> => {
        try {
            const [user]: GetUserById[] = await this.getConnection()
                .select("*")
                .where({ id })
                .from(this.USERS_TABLE_NAME)
            return user
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }
}