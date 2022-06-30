import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { RecipeModel } from "../model/RecipeModel";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class RecipeController {

    // CREATE RECIPE ENDPOINT
    public createRecipe = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {

            const token: string = req.headers.authorization as string

            // desestruturando o user que está vindo pelo body
            const { title, description } = req.body

            // verificaçoes do body
            if (!title || !description) {
                errorCode = 422
                throw new Error(
                    `All fiels are required! 
                Correct format: title as string and email as description.`
                );
            }

            // criar id 
            const generateId = new GenerateId()
            const id: string = generateId.generateId()

            // verificar receita existente 
            const recipeDB = new RecipeDataBase()
            const recipe: RecipeModel = await recipeDB.getRecipeByTitle(title)
            if (recipe) {
                errorCode = 409
                throw new Error("This title already exists!");
            }

            // criando recipe, criacao direta  
            const newRecipe = new RecipeModel(id, title, description)
            await recipeDB.createRecipe(newRecipe)

            // instanciar classe
            const authenticator = new Authenticator()
            const tokenData: AuthenticationData = authenticator.getData(token)

            // retorna message and recipe 
            res.status(200).send({
                message: "Recipe successfully created!",
                newRecipe: { id, title, description }
            })
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }

    // GET RECIPE BY ID 
    public getRecipe = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // pegar o id do recipe desejado 
            const id: string = req.params.id

            // instanciar recipeDb
            const recipeDB = new RecipeDataBase()

            // verificar id 
            const validateId = await recipeDB.getRecipeById(id)
            if (!validateId) {
                errorCode = 422
                throw new Error("You need to insert a valid id.");
            }

            // token data 
            const authorization = new Authenticator()
            const tokenData: AuthenticationData = authorization.getData(token)

            // pegando a receita 
            const recipe: RecipeModel = await recipeDB.getRecipeById(id)

            res.status(200).send(recipe)

        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }


}