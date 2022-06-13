import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { baseURL } from "./baseURL";
import { subscriber } from "./types";


// a - Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro de tipagem?
// sem erros. 

// b - É boa prática fazermos um mapeamento do resultado de uma Promise,
//  caso seja indicado que ela retorne um `Promise<any>`.
//  Explique com as suas palavras o porquê de fazermos isso
//  Com o mapeamento conseguimos retornar cada objeto dentro desse vetor, sendo mais facil tipar nossa promise. 

const app: Express = express();

app.use(express.json());
app.use(cors());

const getSubscribers = async (): Promise<subscriber[]> => {
    const result: any = await axios.get(`${baseURL}/subscribers`)
    return result.data.map((subscriber: any) => {
        console.log({
            id: subscriber.id,
            email: subscriber.email,
            name: subscriber.name
        })
    })
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