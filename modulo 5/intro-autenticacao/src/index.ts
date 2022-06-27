import app from "./app";
import { userController } from "./endpoints/UserController";

const UserController = new userController()
app.post("/user/signup", UserController.createUser)
app.post("/user/login", UserController.userLogin)
app.get("/user/profile", UserController.userProfile)
