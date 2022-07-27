import { Request, Response } from "express";
import { ProductOwnerBusiness } from "../business/ProductOwnerBusiness";

export class ProductOwnerController {

    constructor(
        private productOwnerBusiness = new ProductOwnerBusiness
    ) { }

    insertProductOwner = async (req: Request, res: Response): Promise<void> => {
        try {

            const response: string = await this.productOwnerBusiness.insertProductOwner()

            res.status(201).send({ message: response })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }
}