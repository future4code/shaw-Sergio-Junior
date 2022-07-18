import { app } from "./app";
import { RecipeController } from "./endpoints/RecipesController";
import { UserController } from "./endpoints/UserController";

// instanciar classe dos users
const userController = new UserController()

app.post("/user/signup", userController.createUser)
app.post("/user/login", userController.userLogin)
app.get("/user/profile", userController.userProfile)
app.get("/user/:id", userController.getProfiles)
app.post("/follow/user", userController.followUser)
app.delete("/unfollow/user", userController.unfollowUser)
app.delete("/delete/user/:id", userController.deleteUser)

// instanciar classe dos users
const recipeController = new RecipeController()

app.post("/user/create/recipe", recipeController.createRecipe)
app.get("/recipe/:id", recipeController.getRecipe)
app.get("/feed/recipes", recipeController.getRecipeFeed)
app.put("/edit/recipe/:id", recipeController.editRecipe)
app.delete("/delete/recipe/:id", recipeController.deleteRecipe)