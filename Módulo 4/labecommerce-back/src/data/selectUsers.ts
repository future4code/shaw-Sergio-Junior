import { connection } from "../services/connection";

export const selectUsers = async(): Promise <any> => {
    
    const users = await connection("labecommerce_users")
        .select("labecommerce_users.id","labecommerce_users.name","labecommerce_users.email")

    return users
}

export const getUserByEmail = async(email: string): Promise <any> => {

    const  [user]  = await connection("labecommerce_users")
        .where({email: email})

        return user
}

export const getUserById = async(userId: string): Promise <any> => {

    const user  = await connection("labecommerce_users")
        .where({id: userId})

        return user[0]
}