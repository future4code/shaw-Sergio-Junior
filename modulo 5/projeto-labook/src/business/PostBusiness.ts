import { PostData } from "../data/PostData";
import { PostModel } from "../model/PostModel";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationData } from "../types/AuthenticationData";
import { CommentPostResponse } from "../types/commentPostResponse";
import { GetFullCommentedPost } from "../types/getFullcommentedPost";
import { GetLikedPosts } from "../types/getLikedPosts";
import { getPostByIdResponse } from "../types/getPostByIdResponse";
import { Post } from "../types/post";
import { PostInputDTO } from "../types/postInputDTO";

export class PostBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private postDB: PostData
    ) { }

    createPost = async (post: PostInputDTO, token: string) => {
        // verificar dados recebidos 
        const { photo, description, type, createdAt } = post
        if (!photo || !description || !type || !createdAt) {
            throw new Error("Invalid fields.");
        }

        if (type !== "EVENT" && type !== "NORMAL") {
            throw new Error("Type can only be 'NORMAL' or 'EVENT'.");
        }

        // get token data 
        const tokenData: AuthenticationData = this.authenticator.getData(token)

        // user id
        const userId: string = tokenData.id

        // criacao do id do post 
        const postId: string = this.idGenerator.generateId()

        // montar objeto para solicitar criacao com o banco 
        const postToCreate = new PostModel(postId, photo, description, type, createdAt, userId)

        // solicitar ao banco 
        await this.postDB.createPost(postToCreate)

        return "Success."
    }

    getPostById = async (id: string, token: string) => {
        // validar postid
        const postId: string = id
        if (!id) {
            throw new Error("Id field is empty.");
        }

        // validar token 
        if (!token) {
            throw new Error("Unauthorized");
        }

        // solicitar ao banco 
        const response: getPostByIdResponse[0] = await this.postDB.getPostById(postId)

        return response
    }

    getPostFeed = async (token: string) => {
        // checar token 
        if (!token) {
            throw new Error("You need an authorization.");
        }

        // get token data 
        const tokenData: AuthenticationData = this.authenticator.getData(token)
        const userId: string = tokenData.id

        const response: Post[] = await this.postDB.getPostFeed(userId)
        return response
    }

    getPostsByType = async (token: string, postType: string) => {
        // checar TOKEN
        if (!token) {
            throw new Error("You need an authorization.");
        }
        // post type 
        const type: string = postType.toUpperCase()
        if (type != "NORMAL" && type !== "EVENT") {
            throw new Error("Check your path params, it must be 'NORMAL' or 'EVENT'.");
        }

        const response: Post[] = await this.postDB.getPostsByType(type)

        return response
    }

    likePost = async (token: string, id: string) => {
        // checar auth
        if (!token) {
            throw new Error("You need an authorization.")
        }

        // checar se existe esse id de post 
        const postId: string = id

        const checkPostId = await this.postDB.getPostById(postId)

        if (!checkPostId) {
            throw new Error("Invalid post ID.");
        }

        // get token data 
        const tokenData: AuthenticationData = this.authenticator.getData(token)
        const userId: string = tokenData.id

        // check se o post já foi curtido 
        const checkPost: GetLikedPosts[] = await this.postDB.getLikedPosts(postId, userId)
        if (checkPost.length) {
            throw new Error("You have already liked this post.")
        }

        // solicitar ao banco para curitr post 
        await this.postDB.likePost(postId, userId)

        return "Post successfully liked."
    }

    dislikePost = async (token: string, id: string) => {
        // checar auth
        if (!token) {
            throw new Error("You need an authorization.")
        }

        // checar se existe esse id de post 
        const postId: string = id
        const checkPostId: Post = await this.postDB.getPostById(postId)
        if (!checkPostId) {
            throw new Error("Invalid post ID.");
        }

        // get token data 
        const tokenData: AuthenticationData = this.authenticator.getData(token)
        const userId: string = tokenData.id

        // check se o post já foi curtido 
        const checkPost: GetLikedPosts[] = await this.postDB.getLikedPosts(postId, userId)
        if (!checkPost.length) {
            throw new Error("You haven't even liked this post yet.")
        }

        // solicitar ao banco para descutir post 
        await this.postDB.dislikePost(postId, userId)

        return "Post successfully disliked."
    }

    commentPost = async (token: string, id: string, comment: string) => {
        // checar auth
        if (!token) {
            throw new Error("You need an authorization.")
        }

        // checar se existe esse id de post 
        const postId: string = id
        const checkPostId: Post = await this.postDB.getPostById(postId)
        if (!checkPostId) {
            throw new Error("Invalid post ID.");
        }

        // get token data 
        const tokenData: AuthenticationData = this.authenticator.getData(token)
        const userId: string = tokenData.id

        // checar se estava vindo o comentario 
        if (!comment) {
            throw new Error("Your comment is missing!");
        }

        // solicitar ao banco para descutir post 
        const result: GetFullCommentedPost = await this.postDB.commentPost(postId, userId, comment)

        // criando a resposta para o usuario 
        const response: CommentPostResponse[] = []
        for (let res of result) {
            response.push({
                photo: res.photo,
                description: res.description,
                createdAt: res.created_at,
                postAuthor: res.author_id,
                comment: res.comment,
                commentAuthor: res.user_id
            })
        }

        return response
    }

    getPostPage = async (token: string, postPage: number) => {
        // checar auth
        if (!token) {
            throw new Error("You need an authorization.")
        }

        // checar se existe esse id de post 
        let page: number = postPage
        if (page < 1 || isNaN(page)) {
            page = 1
        }

        // get token data 
        const tokenData: AuthenticationData = this.authenticator.getData(token)
        const userId: string = tokenData.id


        // definir limite de posts por pagina 
        let size: number = 5

        // definir offset 
        let offset: number = (page - 1) * size

        // solicitar ao banco para retornar pagina x de posts  
        const result: Post = await this.postDB.getPostPage(size, offset)

        return result
    }
}