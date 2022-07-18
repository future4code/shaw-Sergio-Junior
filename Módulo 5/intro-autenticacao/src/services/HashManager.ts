import bcrypt, { genSalt } from "bcryptjs"
import dotenv from "dotenv";

dotenv.config()

export class hashManager {
    public hash = async (password: string): Promise<string> => {

        const round: number = Number(process.env.BCRYPT_COST)
        const salt: string = await genSalt(round)
        const result: string = await bcrypt.hash(password, salt)

        return result
    }

    public compare = async (password: string, hash: string): Promise<boolean> => {
        const result: boolean = await bcrypt.compare(password, hash)
        return result
    }
}