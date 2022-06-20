import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getAddresses, } from "./endpoints/getAddresses";
import { getFullAddresses } from "./endpoints/getFullAddresses";
import { insertAddress } from "./endpoints/insertAddress";

const app: Express = express();

app.use(express.json());
app.use(cors());

// EXERCICIO 1
app.get("/address/:cep", getAddresses)
// EXERCICIO 2
app.get("/full_address/:cep", insertAddress)

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})