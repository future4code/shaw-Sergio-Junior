import { RecipeModel } from "../model/RecipeModel";
import { UpdateRecipeModel } from "../model/updateRecipeModel";
import { UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";

const recipesTableName: string = "recipes_cookenu"
const followersTableName: string = "user_followers"
const usersTableName: string = "users_cookenu"

export class RecipeDataBase extends BaseDatabase {
    // CREATE RECIPE 
    public createRecipe = async (recipe: RecipeModel) => {
        try {
            await this.getConnection()
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    user_id: recipe.getUserId()
                })
                .into(recipesTableName)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // GET RECIPE BY TITLE
    public getRecipeByTitle = async (title: string): Promise<RecipeModel> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(recipesTableName)
                .where({ title })

            return result[0] && RecipeModel.toRecipeModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // GET RECIPE BY ID
    public getRecipeById = async (id: string): Promise<RecipeModel> => {
        try {
            const result: RecipeModel[] = await this.getConnection()
                .select("*")
                .from(recipesTableName)
                .where({ id })
            return result[0] && RecipeModel.toRecipeModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // GET RECIPES FEED LIST 
    public getRecipesFeed = async (id: string): Promise<any> => {
        try {

            // array de user q seguimos
            const usersFollowed = await this.getConnection()
                .select("*")
                .from(followersTableName)
                .where("follower_id", id)

            // criacao de array com os ids dos usuarios que seguimos 
            const usersFollowedIds: string[] = []

            // adicao dos ids dos users q seguimos no array 
            usersFollowed.map(async (user: { id: string, user_id: string, follower_id: string }) => {
                return usersFollowedIds.push(user.user_id)
            })

            // array das receitas q vao p o feed
            const recipesToFeed: RecipeModel[] = []

            // populando o array de receitas q vai para o feed 
            for (const userId of usersFollowedIds) {
                const result: RecipeModel[] = await this.getConnection()
                    .select("users_cookenu.id", "title", "description", "created_at", "user_id", "name")
                    .from(recipesTableName)
                    .join(usersTableName, "recipes_cookenu.user_id", "users_cookenu.id")
                    .where("user_id", userId)
                result.length > 0 && recipesToFeed.push(result[0])
            }

            return recipesToFeed
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // EDIT RECIPE 
    public editRecipe = async (title: string, description: string, recipeId: string) => {
        try {
            await this.getConnection()
                .update({
                    title: title,
                    description: description
                })
                .from(recipesTableName)
                .where("id", recipeId)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    // DELETE RECIPE 
    public deleteRecipe = async (recipeId: string) => {
        try {
            await this.getConnection()
                .delete()
                .from(recipesTableName)
                .where("id", recipeId)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}