export enum UserRole {
   NORMAL = "ADMIN",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string,
   role: UserRole
}

export type AuthenticatorData = {
   id: string,
   role: UserRole
}