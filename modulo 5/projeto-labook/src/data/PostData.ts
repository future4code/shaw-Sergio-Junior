import { PostModel } from "../model/PostModel";
import { getPostByIdResponse } from "../types/getPostByIdResponse";
import { BaseDataBase } from "./BaseDataBase";

export class PostData extends BaseDataBase {

    protected TABLE_NAME = "labook_posts"

    createPost = async (post: PostModel) => {
        try {
            await this.getConnection()
                .insert(post)
                .into(this.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getPostById = async (id: string) => {
        try {
            const result: getPostByIdResponse = await this.getConnection()
                .select()
                .from(this.TABLE_NAME)
                .where({ id })

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }
}