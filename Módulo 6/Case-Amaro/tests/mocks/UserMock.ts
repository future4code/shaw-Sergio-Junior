import { LoginInputDTO, UserModel } from "../../src/model/UserModel"

export const userMockUm = new UserModel(
    "123",
    "Manuel",
    "123456",
    "manu@bol.com"
)
export const userMockDois = new UserModel(
    "123456",
    "Joana",
    "1234567",
    "joana@bol.com"
)

export const userLoginMockWrongPassword: LoginInputDTO = {
    email: "joana@bol.com",
    password: "17"
}

export const userLoginMockSuccess: LoginInputDTO = {
    email: "manu@bol.com",
    password: "123456"
}


