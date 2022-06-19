import { Request, Response } from "express";
import { connection } from "../services/connection";

export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection("labecommerce_users")
        
        if(result.length < 1) {
        throw new Error("Please check your request, something is probably missing.");
        }

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send("Internal error" || error.message)
    }
}