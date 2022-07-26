export class PaymentStatusModel {

    constructor(
        private id: string,
        private paymentId: string,
        private paymentStatus: PAYMENT_STATUS
    ) { }

    public getId() {
        return this.id
    }
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
