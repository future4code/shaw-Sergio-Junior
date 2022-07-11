export interface user {
    id?: string,
    name: string,
    password: string,
    email: string,
    role: "NORMAL" | "ADMIN"
}

export interface userLogin {
    email: string,
    password: string
}