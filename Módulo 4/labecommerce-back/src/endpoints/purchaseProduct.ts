import { Request, Response } from "express";
import { connection } from "../services/connection";
import { getUserById } from "../data/selectUsers";
import { getProductById } from "../data/selectProducts"

export const purchaseProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { user_id, product_id, quantity } = req.body

        const product = await getProductById(product_id)

        const user = await getUserById(user_id)

        let total_price = product.price * quantity

        await connection("labecommerce_purchases").insert({
            user_id, product_id, quantity, total_price
        })

        res.status(201).send("Purchase done!!!!!!!")

    } catch (error: any) {
        res.status(500).send("INTERNAL ERROR" || error.message);
    }
}