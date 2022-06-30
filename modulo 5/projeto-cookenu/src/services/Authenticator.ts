import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserRole } from "../model/UserModel";

dotenv.config()

export interface AuthenticationData {
    id: string,
    role: UserRole
}

export class Authenticator {

    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            input, process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        )
        return token
    }

    public getData = (token: string): AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return data as AuthenticationData
    }

}