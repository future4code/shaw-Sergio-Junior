import { RecipeModel } from "../model/RecipeModel";
import { BaseDatabase } from "./BaseDatabase";

const userTableName: string = "recipes_cookenu"

export class RecipeDataBase extends BaseDatabase {
    // CREATE RECIPE 
    public createRecipe = async (recipe: RecipeModel) => {
        try {
            await this.getConnection()
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription()
                })
                .into(userTableName)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // // GET RECIPE BY TITLE
    public getRecipeByTitle = async (title: string): Promise<RecipeModel> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(userTableName)
                .where({ title })

            return result[0] && RecipeModel.toRecipeModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // // GET RECIPE BY ID
    public getRecipeById = async (id: string): Promise<RecipeModel> => {
        try {
            const result: RecipeModel[] = await this.getConnection()
                .select("*")
                .from(userTableName)
                .where({ id })

            return result[0] as RecipeModel
            // return result[0] && RecipeModel.toRecipeModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}