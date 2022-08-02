import { UserModel } from "../../src/model/UserModel";
import { userMockDois, userMockUm } from "./UserMock";

export class UserDatabaseMock {

    public async createUser(user: UserModel): Promise<void> { }

    public async getUserByEmail(email: string): Promise<UserModel | undefined> {
        switch (email) {
            case "manu@bol.com":
                return userMockUm
            case "joana@bol.com":
                return userMockDois
            default:
                undefined
        }
    }

}