import { PAYMENT_METHOD } from "./PaymentModel"

export class PaymentStatusModel {

    constructor(
        private paymentId: string,
        private paymentStatus: PAYMENT_STATUS
    ) { }

    public getPaymentId() {
        return this.paymentId
    }
    public getPaymentStatus() {
        return this.paymentStatus
    }
}

export enum PAYMENT_STATUS {
    PAID = "PAID",
    NOT_PAID = "NOT PAID"
}

export interface PaymentStatusData {
    payment_id: string,
    payment_method: PAYMENT_METHOD,
    payment_status: PAYMENT_STATUS,
    amount: number,
    buyer_id: string,
    product_owner_id: string
}
export interface PaymentResponseData {
    id: string,
    paymentMethod: PAYMENT_METHOD,
    status: PAYMENT_STATUS,
    amount: number,
    buyerId: string,
    productOwner: string
}
