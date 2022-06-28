export enum UserRole {
   NORMAL = "NORMAL",
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