import jwt from "jsonwebtoken";
import { AuthenticatorData } from "../types";
import dotenv from "dotenv";

dotenv.config()

export class Authenticator {
    private static EXPIRES_IN = "2h"

    public generateToken = (input: AuthenticatorData) => {
        const token = jwt.sign(
            input, process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
        return token
    }

    public getData = (token: string): AuthenticatorData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData
        const result = {
            id: data.id,
            role: data.role
        }
        return result
    }

}