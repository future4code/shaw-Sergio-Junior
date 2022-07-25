import { USER_ROLE } from "../../src/model/UserModel"

export class AuthenticatorMock {
    public generateToken() {
        return "TOKEN"
    }

    public getData(token: string) {
        const objeto = {
            id: "id_mock",
            role: USER_ROLE.ADMIN
        }
        return objeto
    }
}