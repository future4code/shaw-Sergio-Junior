import { app } from "./app";
import { RecipeController } from "./endpoints/RecipesController";
import { UserController } from "./endpoints/UserController";

// instanciar classe dos users
const userController = new UserController()

app.post("/user/signup", userController.createUser)
app.post("/user/login", userController.userLogin)
app.get("/user/profile", userController.userProfile)
app.get("/user/:id", userController.getProfiles)

// instanciar classe dos users
const recipeController = new RecipeController()

app.post("/user/create/recipe", recipeController.createRecipe)
app.get("/recipe/:id", recipeController.getRecipe)