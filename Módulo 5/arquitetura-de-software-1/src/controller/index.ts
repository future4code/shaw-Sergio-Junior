import { app } from "./app";
import { UserController } from "./UserController";

// instanciar o controller 
const userController = new UserController()
app.post("/signup", userController.signUp)
app.post("/login", userController.logIn)
app.get("/all", userController.getAllUsers)
app.delete("/user/:id", userController.deleteUser)