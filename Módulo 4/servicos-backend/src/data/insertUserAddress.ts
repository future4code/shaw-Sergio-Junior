import { FullAddress } from "../types";
import { connection } from "./connection";

export const insertUserAddressData = async (address: FullAddress): Promise<void> => {
    try {
        const { CEP, Logradouro, Bairro, Cidade, Complemento, Estado, Número } = address

        await connection("user_Address").insert({
            CEP,
            Logradouro,
            Bairro,
            Cidade,
            Complemento,
            Estado,
            Número
        })

    } catch (error) {
        console.log("Deu ruim")
    }
}