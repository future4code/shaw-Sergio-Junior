import app from "./app";
import { AddressInfo } from "net";
import { createNewUser } from "./endpoints/createNewUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { createNewProduct } from "./endpoints/createNewProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { purchaseProduct } from "./endpoints/purchaseProduct";
import { getPurchaseByUserId } from "./endpoints/getPurchaseByUserId"

//EXERCICIO 1 - CRIANDO USER
app.post("/users", createNewUser)

//EXERCICIO 2 - PEGANDO USERS
app.get("/users", getAllUsers)

//EXERCICIO 3 - CRIANDO PRODUCTS
app.post("/products", createNewProduct)

//EXERCICIO 4 - PEGANDO PRODUCTS
app.get("/products", getAllProducts)

//EXERCICIO 5 - REGISTRO DE COMPRA 
app.post("/purchases", purchaseProduct)

//EXERCICIO 6 - TODAS AS COMPRAS DE UM DETERMINADO USUARIO 
app.get("/users/:userId/purchases", getPurchaseByUserId)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});