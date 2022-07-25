export class UserModel {

    constructor(
        private id: string,
        private userName: string,
        private password: string,
        private email: string,
        private role: USER_ROLE = USER_ROLE.NORMAL
    ) { }

    public getId() {
        return this.id
    }
    public getUserName() {
        return this.userName
    }
    public getPassword() {
        return this.password
    }
    public getRole() {
        return this.role
    }
    public getEmail() {
        return this.email
    }

}

export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface UserInputDTO {
    userName: string,
    password: string,
    email: string,
    role: USER_ROLE
}

export interface LoginInputDTO {
    email: string,
    password: string
}

export interface GetUserByEmail {
    id: string,
    userName: string,
    password: string,
    email: string,
    role: USER_ROLE
}

