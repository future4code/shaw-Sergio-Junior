import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function exercicio4(req: Request, res: Response): Promise<void> {
    try {
        let name = req.query.name

        if (!name) {
            name = ""
        }

        let sort = req.query.sort as string

        if (!sort) {
            sort = "name"
        }

        let order = req.query.order

        if (order !== "asc" && order !== "desc") {
            sort = "name"
            order = "desc"
        }

        const size = 5
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let offset = (page - 1) * size

        const result = await connection("aula48_exercicio").where("name", "LIKE", `%${name}%`).orderBy(sort, order).limit(size).offset(offset)

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