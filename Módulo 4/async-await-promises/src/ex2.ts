import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { baseURL } from "./baseURL";
import { subscriber } from "./types";

// a - Explique, com suas palavras, a diferença da sintaxe de uma
// função nomeada assíncrona e uma arrow function assíncrona
// Na arrow function o async vem antes do parametro e a promise logo após o parametro.
//  Possui a opção de retorno direto, mais curto
// Na nomeada o async vem antes da declaração da funcao e o promise ainda logo após o parametro

const app: Express = express();

app.use(express.json());
app.use(cors());

const getSubscribers = async (): Promise<subscriber[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    console.log(result.data)
    return result.data
}

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})