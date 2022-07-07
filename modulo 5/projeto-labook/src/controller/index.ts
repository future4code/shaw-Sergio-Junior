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

app.post("/user/signup", userController.signUp) // CADASTRAR 
app.post("/user/login", userController.login) // LOGAR 
app.post("/user/friendship", userController.makeFriends) // FAZER AMIZADE 
app.delete("/user/friendship", userController.removeFriendship) // DESFAZER AMIZADE 

const postController = new PostController(
    new PostBusiness(
        new IdGenerator(),
        new Authenticator(),
        new PostData()
    )
)

app.post("/post/create", postController.createPost) // CRIAR POST 
app.get("/post/feed", postController.getPostFeed) // VER TODO FEED 
app.get("/post/feed/:type", postController.getPostsByType) // VER APENAS UM TIPO DE POST
app.post("/post/like/:id", postController.likePost) // CURTIR POST 
app.delete("/post/dislike/:id", postController.dislikePost) // DESCURTIR POST 
app.get("/post/page", postController.getPostPage) // PAGINACAO 
app.post("/post/:id/comment", postController.commentPost) // COMENTAR POST
app.get("/post/:id", postController.getPostById) // PEGAR POST POR ID 
