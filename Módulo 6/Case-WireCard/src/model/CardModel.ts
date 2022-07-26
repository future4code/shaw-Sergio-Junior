export class CardModel {

    constructor(
        private id: string,
        private cardHolderName: string,
        private cardNumber: string,
        private cardExpDate: Date,
        private cardCvv: number
    ) { }

    public getId() {
        return this.id
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