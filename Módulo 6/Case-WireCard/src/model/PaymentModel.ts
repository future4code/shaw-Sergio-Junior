export class PaymentModel {

    constructor(
        private id: string,
        private productOwnerId: string,
        private buyerId: string,
        private amount: number,
        private paymentMethod: PAYMENT_METHOD
    ) { }

    public getId() {
        return this.id
    }
    public getProductOwnerId() {
        return this.productOwnerId
    }
    public getBuyerId() {
        return this.buyerId
    }
    public getAmount() {
        return this.amount
    }
    public getPaymentMethod() {
        return this.paymentMethod
    }
}

export enum PAYMENT_METHOD {
    CREDIT_CARD = "CREDIT CARD",
    BOLETO = "BOLETO"
}

export interface PaymentDTO {
    productOwnerId: string,
    buyerId: string,
    amount: number,
    paymentMethod: PAYMENT_METHOD
}


