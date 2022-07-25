import express from "express";
import { ProductController } from "../controller/ProductController";


export const productRouter = express.Router();

const productController = new ProductController();

productRouter.post("/addproduct", productController.insert);
productRouter.get("/getproducts", productController.getProducts);