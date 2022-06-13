import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { baseURL } from "./baseURL";
import { subscriber } from "./types";


// a - Qual endpoint você deve utilizar para isso ?
// axios.get(`${baseURL}/subscribers`)
// b - Como indicamos o tipo de uma função assíncrona que retorna
// um "array de qualquer coisa" ?
// Promise<any>

const app: Express = express();

app.use(express.json());
app.use(cors());

async function getSubscribers(): Promise<any> {
    const result = await axios.get(`${baseURL}/subscribers`)
    console.log(result.data)
    return result.data
}

const main = async (): Promise<void> => {
    try {
        const subscribers: subscriber[] = await getSubscribers()
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})