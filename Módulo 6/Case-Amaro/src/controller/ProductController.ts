import { Request, response, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { GetProduct, NewProductInputDTO, ProductModel } from "../model/ProductModel";

export class ProductController {
    constructor(
        private productBusiness = new ProductBusiness
    ) { }

    insert = async (req: Request, res: Response) => {
        const { productName, tags } = req.body
        const newProduct: NewProductInputDTO = {
            productName,
            tags
        }
        const token: string = req.headers.authorization as string

        try {
            const response: ProductModel = await this.productBusiness.insert(newProduct, token)

            res.status(201).send({ product: response, message: "Success." })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getProducts = async (req: Request, res: Response) => {

        try {
            let response;

            const token: string = req.headers.authorization as string

            if (req.body.productId) {
                response = await this.productBusiness.getProductById(req.body.productId, token)
            }
            if (req.body.productName) {
                response = await this.productBusiness.getProductByName(req.body.productName, token)
            }
            if (req.body.productTag) {
                response = await this.productBusiness.getProductByTag(req.body.productTag, token)
            }

            res.status(200).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }
}