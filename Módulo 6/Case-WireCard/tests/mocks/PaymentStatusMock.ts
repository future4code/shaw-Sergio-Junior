import { PAYMENT_METHOD } from "../../src/model/PaymentModel";
import { PaymentResponseData, PaymentStatusData, PaymentStatusModel, PAYMENT_STATUS } from "../../src/model/PaymentStatusModel";

export const PaymentStatusMock1: PaymentStatusData = {
    payment_id: "id_mock",
    payment_method: PAYMENT_METHOD.BOLETO,
    payment_status: PAYMENT_STATUS.NOT_PAID,
    amount: 4500,
    buyer_id: "def",
    product_owner_id: "abc"
}
export const PaymenResponseDataMock: PaymentResponseData = {
    id: "id_mock",
    paymentMethod: PAYMENT_METHOD.BOLETO,
    status: PAYMENT_STATUS.NOT_PAID,
    amount: 4500,
    buyerId: "def",
    productOwner: "abc"
}

