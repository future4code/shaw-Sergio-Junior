import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { baseURL } from "./baseURL";
import { news, subscriber } from "./types";


const app: Express = express();

app.use(express.json());
app.use(cors());

const users: subscriber[] = [{
    id: 'eb98add9-6981-41d6-8d9f-d63258486296',
    email: 'pais.basco@labenu.com.br',
    name: 'País, o Basco'
}, {
    id: 'e490871e-557f-40c8-902e-f2244bdc1f79',
    email: 'Rick@Severus.com.br',
    name: 'Principe, o mestiço'
}]

const sendMessage = async (users: subscriber[], message: string): Promise<void> => {
    for (const user of users) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log(`Notificação enviada a ${user.name}`)
        } catch (error) {
            console.log(`Erro ao enviar para ${user.name}`)
        }
    }
}

const message: string = "Seja bem vindoooooo!"

const main = async (): Promise<void> => {
    try {
        await sendMessage(users, message)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})