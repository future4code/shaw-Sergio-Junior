import { Request, Response } from "express";
import { connection } from "../services/connection";

export const createNewProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, price, image_url } = req.body

        await connection("labecommerce_products").insert({
            name,
            price,
            image_url
        })

        if (!name || !price || !image_url || req.body === undefined) {
            throw new Error("Please check your fields!");
        }

        res.status(201).send("Product created!")

    } catch (error: any) {
        res.status(400).send("Internal error" || error.message)
    }
}