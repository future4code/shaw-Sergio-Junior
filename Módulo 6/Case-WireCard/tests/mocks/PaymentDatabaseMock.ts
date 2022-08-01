import { PaymentModel, PAYMENT_METHOD } from "../../src/model/PaymentModel"
import { PaymentResponseData, PaymentStatusData, PaymentStatusModel } from "../../src/model/PaymentStatusModel"
import { PaymentStatusMock1 } from "./PaymentStatusMock"

export class PaymentDatabaseMock {

    insertPayment = async (paymentInfo: PaymentModel, paymentStatusModel: PaymentStatusModel): Promise<object> => {
        switch (paymentInfo.getPaymentMethod()) {
            case PAYMENT_METHOD.CREDIT_CARD:
                return { paymentStatus: "PAID" }
            default:
                return { message: "Internal error." }
        }
    }

    getCreditCard = async (buyerId: string): Promise<boolean> => {
        switch (buyerId) {
            case "def":
                return true
            default:
                return false
        }
    }

    getBuyerById = async (buyerId: string): Promise<boolean> => {
        switch (buyerId) {
            case "def":
                return true
            default:
                return false
        }
    }

    getProductOwnerById = async (productOwnerId: string): Promise<boolean> => {
        switch (productOwnerId) {
            case "abc":
                return true
            default:
                return false
        }
    }

    getPaymentStatus = async (paymentId: string): Promise<PaymentStatusData | undefined | PaymentResponseData> => {
        switch (paymentId) {
            case "id_mock":
                return PaymentStatusMock1
            default:
                return undefined
        }
    }

}