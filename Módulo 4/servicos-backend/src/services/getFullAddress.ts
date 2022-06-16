import axios from "axios"
import { Address, FullAddress } from "../types"

export const getFullAddress = async (cep: string): Promise<any> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: FullAddress = {
            CEP: result.data.cep,
            Logradouro: result.data.logradouro,
            Número: result.data.gia,
            Complemento: result.data.complemento ? result.data.complemento : "",
            Bairro: result.data.bairro,
            Cidade: result.data.localidade,
            Estado: result.data.uf
        }

        return address

    } catch (error) {
        console.log("CEP is not valid!")
    }
}