export class UserModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: "NORMAL" | "ADMIN"
    ) { }

    static toUserModel = (data: any): UserModel => {
        return new UserModel(data.id, data.name, data.email, data.password, data.role)
    }
    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getEmail() {
        return this.email
    }
    public getPassword() {
        return this.password
    }
    public getRole() {
        return this.role
    }
}