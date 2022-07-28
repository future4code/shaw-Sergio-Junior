import { BuyerModel, BuyerUserDTO } from "../../src/model/BuyerModel";

export const BuyerMock1 = new BuyerModel("id_mock", "Manuela", "pop123@gmail.com", "12365487956")

export const BuyerMockDTOSucess: BuyerUserDTO = {
    name: "Manuela", email: "success@gmail.com", CPF: "12365487956"
}
export const BuyerMockDTOFail: BuyerUserDTO = {
    name: "Jango", email: "pop123@gmail.com", CPF: "12365487956"
}