export class BuyerModel {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private CPF: string
    ) { }

    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getEmail() {
        return this.email
    }
    public getCPF() {
        return this.CPF
    }
}

export interface BuyerUserDTO {
    name: string,
    email: string,
    CPF: string
}
export interface CardDTO {
    cardHolderName: string,
    cardNumber: string,
    cardExpDate: Date,
    cardCvv: string
}

