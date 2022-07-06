import { PostBusiness } from "../business/PostBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { PostData } from "../data/PostData";
import { UserData } from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { app } from "./app";
import { PostController } from "./PostController";
import { UserController } from "./UserController";

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    )
)

app.post("/user/signup", userController.signUp)
app.post("/user/login", userController.login)

const postController = new PostController(
    new PostBusiness(
        new IdGenerator(),
        new Authenticator(),
        new PostData()
    )
)

app.post("/post/create", postController.createPost)
app.get("/post/:id", postController.getPostById)