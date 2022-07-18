import bcrypt, { genSalt } from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export class HashManager {
    public hash = async (password: string): Promise<string> => {

        const round: number = Number(process.env.BCRYPT_COST);
        const salt: string = await genSalt(round);

        return await bcrypt.hash(password, salt)
    }

    public compare = async (passwordToCompare: string, hash: string): Promise<boolean> => {
        return await bcrypt.compare(passwordToCompare, hash)
    }
}