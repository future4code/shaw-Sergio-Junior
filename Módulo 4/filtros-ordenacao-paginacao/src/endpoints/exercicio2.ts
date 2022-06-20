import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function exercicio2(req: Request, res: Response): Promise<void> {
    try {

        let sort = req.query.sort
        let order = req.query.order

        if (order !== "asc" && order !== "desc") {
            order = "asc"
        }

        if (sort !== "name" && sort !== "type") {
            sort = "email"
        }

        const result = await connection("aula48_exercicio").orderBy(sort, order)

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