import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from "../types/AuthenticationData";

dotenv.config()


export class Authenticator {

    public generateToken = (input: AuthenticationData): string => {
        const token: string = jwt.sign(
            input, process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        )
        return token
    }

    public getData = (token: string): AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return data
    }

}