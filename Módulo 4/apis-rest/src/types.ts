export enum Type {
    admin = "ADMIN",
    normal = "NORMAL"
}

export type TypeUser = {
    id: number,
    name: string,
    email: string,
    type: Type,
    age: number
}

export type Body = {
    name: string,
    email: string,
    age: number
}