import { User, USER_ROLES } from "../../src/model/User";
import { userMocks, userMocks2 } from "./userMocks";


export class UserDatabaseMocks {

   public async createUser(user: User): Promise<void> { }

   public async getUserByEmail(email: string): Promise<User | undefined> {
      switch (email) {
         case "mock1@gmail.com":
            return userMocks
         case "mock2@gmail.com":
            return userMocks2
         default:
            return undefined
      }
   }

   public async getUserById(id: string): Promise<any | undefined> {
      switch (id) {
         case "id_mock1":
            return userMocks
         case "id_mock2":
            return userMocks2
         default:
            return undefined
      }
   }

   public async getAllUsers(): Promise<User[]> {
      return [userMocks, userMocks2]
   }
}

export default new UserDatabaseMocks()