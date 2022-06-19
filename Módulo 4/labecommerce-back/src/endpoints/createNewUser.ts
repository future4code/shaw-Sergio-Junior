import { Request, Response } from "express";
import { connection } from "../services/connection";

export const createNewUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password } = req.body

        await connection("labecommerce_users").insert({
            name,
            email,
            password
        })

        if (!name || !email || !password || req.body === undefined) {
            throw new Error("Please check your fields!");
        }

        res.status(201).send("User created!")

    } catch (error: any) {
        res.status(400).send("Internal error" || error.message)
    }
}