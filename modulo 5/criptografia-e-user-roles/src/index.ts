import app from "./app";
import { userController } from "./endpoints/UserController";

const UserController = new userController()
app.post("/user/signup", UserController.createUserCrypt)
app.post("/user/login", UserController.userLoginCrypt)
app.get("/user/profile", UserController.userProfile)


