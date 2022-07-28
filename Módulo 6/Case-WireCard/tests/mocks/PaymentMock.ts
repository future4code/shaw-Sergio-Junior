import { PaymentDTO, PaymentModel, PAYMENT_METHOD } from "../../src/model/PaymentModel";

export const PaymentModelMock: PaymentModel = new PaymentModel(
    "id_mock", "abc", "def", 4500, PAYMENT_METHOD.CREDIT_CARD
)

export const PaymentMockDTOSuccess: PaymentDTO = {
    productOwnerId: "abc",
    buyerId: "def",
    amount: 4500,
    paymentMethod: PAYMENT_METHOD.CREDIT_CARD
} 

export const PaymentMockDTOFailure: PaymentDTO = {
    productOwnerId: "123",
    buyerId: "def",
    amount: 4500,
    paymentMethod: PAYMENT_METHOD.CREDIT_CARD
} 