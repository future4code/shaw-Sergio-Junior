
import { UserBusiness } from "../src/business/UserBusiness"
import { USER_ROLES } from "../src/model/User"
import { HashGeneratorMocks } from "./mocks/hashGeneratorMocks"
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks"
import { TokenGeneratorMocks } from "./mocks/tokenGeneratorMocks"
import { UserDatabaseMocks } from "./mocks/UserDatabaseMocks"
// instanciar o userbusiness 

const userBusinessMock = new UserBusiness(
    new IdGeneratorMocks,
    new HashGeneratorMocks as any,
    new UserDatabaseMocks as any,
    new TokenGeneratorMocks,
)

describe("Exercicio 2", () => {

    test("Erro de usuário não existente.", async () => {
        expect.assertions(2)
        try {
            await userBusinessMock.getUserById("dsadas")
        } catch (error: any) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })

    test("Resposta de sucesso", async () => {
        expect.assertions(2)
        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
            )
            const result = await getUserById("id_mock2")

            expect(getUserById).toHaveBeenCalledWith("id_mock2")
            expect(result).toEqual({
                id: "id_mock2",
                name: "mock2",
                email: "mock2@gmail.com",
                role: USER_ROLES.NORMAL
            })

        } catch (error) {
            console.log(error)
        }
    })

})