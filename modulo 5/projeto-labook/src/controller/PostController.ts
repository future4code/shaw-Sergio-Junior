import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { getPostByIdResponse } from "../types/getPostByIdResponse";

export class PostController {

    constructor(
        private postBusiness: PostBusiness
    ) { }

    createPost = async (req: Request, res: Response) => {

        // receber do body
        const { photo, description, type, createdAt } = req.body

        // receber o token de auth 
        const token: string = req.headers.authorization as string

        //montar o objeto 
        const post = {
            photo,
            description,
            type,
            createdAt
        }

        try {
            // solicitar ao business para criar o objeto e devolver uma mensagem 
            const response: string = await this.postBusiness.createPost(post, token)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    getPostById = async (req: Request, res: Response) => {
        // pegar o id que vem por params 
        const postId: string = req.params.id
        // pegar o token  
        const token: string = req.headers.authorization as string

        try {
            // solicitar ao business que busque o post por id 
            const response: getPostByIdResponse[0] = await this.postBusiness.getPostById(postId, token)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}