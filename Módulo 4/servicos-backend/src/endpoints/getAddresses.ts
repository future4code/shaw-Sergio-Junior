import { Request, Response } from "express";
import { getAddress } from "../services/getAddress";
import { Address } from "../types";

export const getAddresses = async (req: Request, res: Response): Promise<void> => {
    try {
        const cep = req.params.cep

        const result: Address | undefined = await getAddress(cep)

        console.log(result)

    } catch (error) {
        console.log("Deu ruim")
    }
}