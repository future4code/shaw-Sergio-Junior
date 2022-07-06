import { PostData } from "../data/PostData";
import { PostModel } from "../model/PostModel";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationData } from "../types/AuthenticationData";
import { getPostByIdResponse } from "../types/getPostByIdResponse";
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
}