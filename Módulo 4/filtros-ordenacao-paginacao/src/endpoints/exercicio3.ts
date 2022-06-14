import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function exercicio3(req: Request, res: Response): Promise<void> {
    try {

        const size = 5
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let offset = (page - 1) * size

        const result = await connection("aula48_exercicio").limit(size).offset(offset)

        const users = result.map(toUser)

        res.status(200).send(users)

    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}