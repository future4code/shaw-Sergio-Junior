import { Request, Response } from "express";
import { connection } from "../services/connection";

export const getPurchaseByUserId = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection("labecommerce_purchases")
            .where("user_id", req.params.userId)
            .join("labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id")
            .join("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
            .select([
                "labecommerce_users.name as user", "labecommerce_users.email as email",
                "labecommerce_products.name as product", "labecommerce_products.price as price",
                "labecommerce_products.image_url as image", "labecommerce_purchases.quantity as quantity",
                "labecommerce_purchases.total_price as total_price"
            ])

        let totalPrice = 0

        let total = result.map((item) => {
            return totalPrice = item.total_price + totalPrice
        })

        console.log(totalPrice)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send("INTERNAL ERROR" || error.message);
    }
}