import { Request, Response } from "express";
import { insertUserAddressData } from "../data/insertUserAddress";
import { getFullAddress } from "../services/getFullAddress";
import { FullAddress } from "../types";

export const insertAddress = async (req: Request, res: Response): Promise<any> => {
    try {
        const cep: string = req.params.cep

        const result: FullAddress = await getFullAddress(cep)

        await insertUserAddressData(result)

        res.status(201).send("Address inserted!")
    } catch (error) {
        res.status(500).send("Something has gone wrong back in here!")
    }
}