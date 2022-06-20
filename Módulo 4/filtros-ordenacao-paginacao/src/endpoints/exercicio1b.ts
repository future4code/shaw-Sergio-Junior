import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user, types } from "../types"

export async function exercicio1b(req: Request, res: Response): Promise<void> {
    let errorCode: number = 0;
    try {

        const type = req.params.type

        if (type !== types.CX.toLowerCase() &&
            type !== types.Operations.toLowerCase() &&
            type !== types.Teacher.toLowerCase()) {
            errorCode = 404
            throw new Error("Type not found!");
        }

        const result = await connection("aula48_exercicio")
            .where("type", `${type}`)

        // if (!result || result === []) {
        //     errorCode = 404
        //     throw new Error("Type not found!");
        // }
        const users = result.map(toUser)

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode !== 0 ? errorCode : 500).send(error.message || "Internal server error")
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