import express from "express";
import { ProductOwnerController } from "../controller/ProductOwnerController";


export const productOwnerRouter = express.Router();

const productOwnerController = new ProductOwnerController();

productOwnerRouter.post("/", productOwnerController.insertProductOwner);