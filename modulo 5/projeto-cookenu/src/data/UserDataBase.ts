import { FollowersModel } from "../model/FollowersModel";
import { UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";

const recipesTable = "recipes_cookenu"
const userTableName: string = "users_cookenu"
const followersTableName: string = "user_followers"

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
    // GET USER BY ID 
    public getUserById = async (id: string): Promise<UserModel> => {
        try {
            const result: UserModel[] = await this.getConnection()
                .select("*")
                .from(userTableName)
                .where({ id })

            return result[0] && UserModel.toUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // GET USER BY EMAIL
    public getByEmail = async (email: string): Promise<UserModel> => {
        try {
            const result: UserModel[] = await this.getConnection()
                .select("*")
                .from(userTableName)
                .where({ email })

            return result[0] && UserModel.toUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // FOLLOW USER
    public followUser = async (userToFollowId: string, userId: string): Promise<void> => {
        try {
            await this.getConnection()
                .insert({
                    user_id: userToFollowId,
                    follower_id: userId
                })
                .into(followersTableName)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // UNFOLLOW USER
    public unFollowUser = async (userToUnfollowId: string, userId: string): Promise<void> => {
        try {
            await this.getConnection()
                .delete()
                .from(followersTableName)
                .where("follower_id", userId).andWhere("user_id", userToUnfollowId)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // GET FOLLOWED USER BY ID
    public getFollowedUserById = async (userToFollowId: string, userId: string): Promise<FollowersModel[]> => {
        try {
            const result: FollowersModel[] = await this.getConnection()
                .select("*")
                .from(followersTableName)
                .where("follower_id", userId)
                .andWhere("user_id", userToFollowId)

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // DELETE USER 
    public deleteUser = async (userId: string) => {
        try {
            await this.getConnection()
                .delete()
                .from(followersTableName)
                .where("user_id", userId)
            await this.getConnection()
                .delete()
                .from(recipesTable)
                .where("user_id", userId)
            await this.getConnection()
                .delete()
                .from(userTableName)
                .where("id", userId)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}