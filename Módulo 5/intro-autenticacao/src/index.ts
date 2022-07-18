import app from "./app";
import { userController } from "./endpoints/UserController";
import { hashManager } from "./services/HashManager";

const UserController = new userController()
app.post("/user/signup", UserController.createUserCrypt)
app.post("/user/login", UserController.userLoginCrypt)
app.get("/user/profile", UserController.userProfile)



//-- TESTE DO HASH MANAGER
// const HashManager = new hashManager()
// const test = async () => {
//     const senhaCadastrada: string = "123456"
//     const senhaTentaiva: string = "123456"
//     // tentativa correta
//     const hash: string = await HashManager.hash(senhaCadastrada)
//     console.log("Hash 'salt no inicio, observe'", hash)
//     const comparePass: boolean = await HashManager.compare(senhaTentaiva, hash)
//     console.log("Posso logar?", comparePass)
// }

// test()


