import { PostModel } from "../model/PostModel";
import { GetFriendsByUserId } from "../types/getFriendsByUserId";
import { GetFullCommentedPost } from "../types/getFullcommentedPost";
import { GetLikedPosts } from "../types/getLikedPosts";
import { getPostByIdResponse } from "../types/getPostByIdResponse";
import { Post } from "../types/post";
import { BaseDataBase } from "./BaseDataBase";

export class PostData extends BaseDataBase {

    protected POSTS_TABLE_NAME = "labook_posts"
    protected FRIENDS_TABLE_NAME = "user_friends"
    protected LIKED_POSTS_TABLE_NAME = "liked_posts"
    protected COMMENTED_POSTS_TABLE_NAME = "commented_posts"

    createPost = async (post: PostModel) => {
        try {
            await this.getConnection()
                .insert(post)
                .into(this.POSTS_TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getPostById = async (id: string) => {
        try {
            const result: getPostByIdResponse = await this.getConnection()
                .select()
                .from(this.POSTS_TABLE_NAME)
                .where({ id })

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getPostFeed = async (userId: string) => {

        try {
            // pegar os ids amigos 
            const myFriends: GetFriendsByUserId = await this.getConnection()
                .select()
                .from(this.FRIENDS_TABLE_NAME)
                .where({ user_id: userId })

            // pegando os ids dos meus amigos     
            let myFriendsId = []
            for (const friend of myFriends) {
                myFriendsId.push(friend.friend_id)
            }

            // pegar os posts dos meus amigos 
            const myFriendsPosts: Post[] = [];
            for (let id of myFriendsId) {
                const post = await this.getConnection()
                    .select()
                    .from(this.POSTS_TABLE_NAME)
                    .where({ author_id: id })
                post.filter((post) => myFriendsPosts.push(post))
            }

            const orderedPostList = myFriendsPosts.sort((a: Post, b: Post) => {
                if (a.created_at > b.created_at) {
                    return -1
                }
                if (a.created_at < b.created_at) {
                    return 1
                }
                return 0
            })

            return orderedPostList

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }

    }

    getPostsByType = async (type: string) => {
        try {

            const result: Post[] = await this.getConnection()
                .select()
                .from(this.POSTS_TABLE_NAME)
                .where({ type: type })

            const orderedPosts: Post[] = result.sort((a: Post, b: Post) => {
                if (a.created_at > b.created_at) {
                    return -1
                }
                if (a.created_at < b.created_at) {
                    return 1
                }
                return 0
            })

            return orderedPosts
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }

    }

    getLikedPosts = async (postId: string, userId: string) => {
        try {

            const response: GetLikedPosts[] = await this.getConnection()
                .select()
                .where({ post_id: postId, user_id: userId, liked: "1" })
                .from(this.LIKED_POSTS_TABLE_NAME)

            return response

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    likePost = async (postId: string, userId: string) => {
        try {

            await this.getConnection()
                .insert({
                    liked: "1",
                    user_id: userId,
                    post_id: postId
                })
                .into(this.LIKED_POSTS_TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }

    }

    dislikePost = async (postId: string, userId: string) => {
        try {

            await this.getConnection()
                .delete()
                .where({
                    user_id: userId,
                    post_id: postId
                })
                .into(this.LIKED_POSTS_TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }

    }

    commentPost = async (postId: string, userId: string, comment: string) => {
        try {

            await this.getConnection()
                .insert({
                    comment,
                    user_id: userId,
                    post_id: postId
                })
                .into(this.COMMENTED_POSTS_TABLE_NAME)

            const response: GetFullCommentedPost = await this.getConnection()
                .select()
                .from(this.POSTS_TABLE_NAME)
                .join(this.COMMENTED_POSTS_TABLE_NAME, "labook_posts.id", "commented_posts.post_id")
                .where("post_id", postId)

            return response
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }

    }

    getPostPage = async (size: number, offset: number) => {
        try {

            const response: Post[] = await this.getConnection()
                .select()
                .limit(size)
                .offset(offset)
                .from(this.POSTS_TABLE_NAME)

            return response
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }

    }
}