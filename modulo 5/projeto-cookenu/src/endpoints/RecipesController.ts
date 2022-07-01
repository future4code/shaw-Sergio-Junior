import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { FollowersModel } from "../model/FollowersModel";
import { RecipeModel } from "../model/RecipeModel";
import { UpdateRecipeModel } from "../model/updateRecipeModel";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class RecipeController {

    // CREATE RECIPE ENDPOINT
    public createRecipe = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {

            const token: string = req.headers.authorization as string

            // instanciar classe
            const authenticator = new Authenticator()
            const tokenData: AuthenticationData = authenticator.getData(token)
            const userId: string = tokenData.id

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
            const newRecipe = new RecipeModel(id, title, description, userId)
            await recipeDB.createRecipe(newRecipe)


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
    // GET RECIPES FEED 
    public getRecipeFeed = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // token data 
            const authorization = new Authenticator()
            const tokenData: AuthenticationData = authorization.getData(token)
            // id da pessoa logada
            const loggedUserId: string = tokenData.id

            // instanciar recipeDb
            const recipeDB = new RecipeDataBase()

            // GET ALL RECIPES
            const recipes = await recipeDB.getRecipesFeed(loggedUserId)
            if (!recipes.length) {
                throw new Error("None of your friends have recipes!");
            }
            res.status(200).send(recipes)
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // EDIT RECIPE
    public editRecipe = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // dados a serem atualizados 
            const { title, description } = req.body
            if (!title || !description) {
                errorCode = 422
                throw new Error("Title and Description fields are required!");
            }

            // instanciar recipeDb
            const recipeDB = new RecipeDataBase()

            // pegar id da receita por params 
            const recipeId: string = req.params.id

            // ver se tem receita 
            const getRecipe = await recipeDB.getRecipeById(recipeId)
            if (!getRecipe) {
                errorCode = 422
                throw new Error("Please insert a valid recipeId in the params!");
            }

            // token data 
            const authorization = new Authenticator()
            const tokenData: AuthenticationData = authorization.getData(token)
            // id da pessoa logada
            const loggedUserId: string = tokenData.id

            // checar se a receita é do user 
            const getRecipeToCompare = await recipeDB.getRecipeById(recipeId)
            if (getRecipeToCompare.getUserId() !== loggedUserId) {
                errorCode = 404
                throw new Error("Unauthorized!");
            }

            // EDIT RECIPE
            await recipeDB.editRecipe(title, description, recipeId)

            res.status(200).send("Recipe successfully updated.")
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
    // DELETE RECIPE
    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode: number = 500
        try {
            // pegar o token do headers
            const token: string = req.headers.authorization as string
            // verifica se está sendo passado um authorization
            if (!token) {
                errorCode = 422
                throw new Error("You need to insert an athorization.");
            }

            // gerar token data 
            const authorization = new Authenticator()
            const tokenData: AuthenticationData = authorization.getData(token)
            const loggedUserId: string = tokenData.id

            // pegar id da receita por params
            const recipeId: string = req.params.id

            // instanciar checar se a receita é do user 
            const recipeDB = new RecipeDataBase()
            const getRecipeToCompare = await recipeDB.getRecipeById(recipeId)

            // checar se há recipe 
            const getRecipe = await recipeDB.getRecipeById(recipeId)
            if (!getRecipe) {
                errorCode = 422
                throw new Error("Please insert a valid recipeId!");
            }

            // instanciar e checar tipo de usuario 
            const userDB = new UserDataBase()
            const getUserToCheckRole = await userDB.getUserById(loggedUserId)

            if (getUserToCheckRole.getRole() !== "ADMIN" && getRecipeToCompare.getUserId() !== loggedUserId) {
                errorCode = 404
                throw new Error("Unauthorized!");
            }

            // DELETE RECIPE
            await recipeDB.deleteRecipe(recipeId)

            res.status(200).send("Recipe successfully deleted.")
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message || "Internal server error" })
        }
    }
}