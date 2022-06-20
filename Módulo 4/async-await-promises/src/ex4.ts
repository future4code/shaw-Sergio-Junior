import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { baseURL } from "./baseURL";
import { news } from "./types";

// a - Função assincrona, pois dependemos de uma api externa a nossa maquina local, 
//  esperamos ser concretizada nossa requisição para continuar. 


const app: Express = express();

app.use(express.json());
app.use(cors());

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    })
    console.log({ title, content, date })
}

const title = "Tartaruga ultrapassa lebre e ganha corrida"
const content = "Para a alegria de muitos, e a tristeza de alguns, a tartaruga está, agora, no pódio!"
const date = Math.random()

const main = async (): Promise<void> => {
    try {
        const createNew = await createNews(title, content, date)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})