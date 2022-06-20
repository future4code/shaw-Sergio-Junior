import { Request, Response } from "express";
import { getFullAddress } from "../services/getFullAddress";
import { FullAddress } from "../types";

export const getFullAddresses = async (req: Request, res: Response): Promise<void> => {
    try {
        const cep = req.params.cep

        const result: FullAddress | undefined = await getFullAddress(cep)

        console.log(result)

    } catch (error) {
        console.log("Deu ruim")
    }
}