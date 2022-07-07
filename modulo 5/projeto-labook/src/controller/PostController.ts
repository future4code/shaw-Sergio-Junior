import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { getPostByIdResponse } from "../types/getPostByIdResponse";
import { Post } from "../types/post";

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

    getPostFeed = async (req: Request, res: Response) => {

        const token: string = req.headers.authorization as string

        try {

            const response: Post[] = await this.postBusiness.getPostFeed(token)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    getPostsByType = async (req: Request, res: Response) => {
        const token: string = req.headers.authorization as string

        const postType: string = req.params.type

        try {
            const response: Post[] = await this.postBusiness.getPostsByType(token, postType)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    likePost = async (req: Request, res: Response) => {

        const token: string = req.headers.authorization as string

        const postId: string = req.params.id

        try {
            const response: string = await this.postBusiness.likePost(token, postId)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    dislikePost = async (req: Request, res: Response) => {

        const token: string = req.headers.authorization as string

        const postId: string = req.params.id

        try {
            const response: string = await this.postBusiness.dislikePost(token, postId)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    commentPost = async (req: Request, res: Response) => {
        // pegar token de auth
        const token: string = req.headers.authorization as string
        // pegar id do post a ser comentado
        const postId: string = req.params.id
        // pegar texto do comentario  
        const comment: string = req.body.comment

        try {
            const response = await this.postBusiness.commentPost(token, postId, comment)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    getPostPage = async (req: Request, res: Response) => {
        // pegar token de auth
        const token: string = req.headers.authorization as string
        // pegar id do post a ser comentado
        const postPage: number = Number(req.query.page)

        try {
            const response = await this.postBusiness.getPostPage(token, postPage)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}