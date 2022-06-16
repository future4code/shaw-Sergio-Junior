import axios from "axios"
import { Address } from "../types"

export const getAddress = async (cep: string) => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            Logradouro: result.data.logradouro,
            Bairro: result.data.bairro,
            Cidade: result.data.localidade,
            Estado: result.data.uf
        }
        return address
    } catch (error) {
        console.log("Deu ruim")
    }
}