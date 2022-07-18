import bcrypt, { genSalt } from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export class HashManager {
    public hash = async (password: string): Promise<string> => {
        const round: number = Number(process.env.BCRYPT_COST);
        const salt: string = await genSalt(round);
        const result: string = await bcrypt.hash(password, salt);

        return result;
    };

    public compare = async (passwordToCompare: string, hash: string): Promise<boolean> => {
        const result: boolean = await bcrypt.compare(passwordToCompare, hash);
        return result;
    };
}
