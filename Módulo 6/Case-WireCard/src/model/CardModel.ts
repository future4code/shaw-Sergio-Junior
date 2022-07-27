export class CardModel {

    constructor(
        private id: string,
        private cardHolderId: string,
        private cardHolderName: string,
        private cardNumber: string,
        private cardExpDate: Date,
        private cardCvv: string
    ) { }

    public getId() {
        return this.id
    }
    public getCardHolderId() {
        return this.cardHolderId
    }
    public getCardHolderName() {
        return this.cardHolderName
    }
    public getCardNumber() {
        return this.cardNumber
    }
    public getCardExpDate() {
        return this.cardExpDate
    }
    public getCardCvv() {
        return this.cardCvv
    }
}

export interface CardDTO {
    cardHolderId: string,
    cardHolderName: string,
    cardNumber: string,
    cardExpDate: Date,
    cardCvv: string
}