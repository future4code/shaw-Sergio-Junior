import { BuyerDatabase } from "../data/BuyerDataBase";
import { CardCvv } from "../data/mocks/cvvMocks";
import { CustomError } from "../error/CustomError"
import { BuyerModel, BuyerUserDTO } from "../model/BuyerModel"
import { CardDTO, CardModel } from "../model/CardModel";
import { IdGenerator } from "../services/IdGenerator";

export class BuyerBusiness {

    constructor(
        private buyerDB = new BuyerDatabase,
        private idGenerator = new IdGenerator
    ) { }

    insertBuyer = async (buyerUser: BuyerUserDTO): Promise<string> => {
        const { name, email, CPF } = buyerUser

        try {
            if (!name || !email || !CPF) {
                throw new CustomError(422, "Fill all the body fields.");
            }
            if (typeof name != "string" || typeof email != "string" || typeof CPF != "string") {
                throw new CustomError(422, "Fill all the body fields with strings.");
            }
            if (!email.includes("@")) {
                throw new CustomError(422, "Email must be valid.");
            }
            if (isNaN(Number(CPF))) {
                throw new CustomError(422, "CPF must contain only numbers.");
            }
            if (CPF.length !== 11) {
                throw new CustomError(422, "CPF must contain only 11 numbers.");
            }

            const validateEmail: boolean = await this.buyerDB.getBuyerByEmail(email)
            if (validateEmail) {
                throw new CustomError(422, "Email already exists.");
            }

            const validateCPF: boolean = await this.buyerDB.getBuyerByCPF(CPF)
            if (validateCPF) {
                throw new CustomError(422, "CPF already exists.");
            }

            const id: string = this.idGenerator.generate()

            const buyerModel: BuyerModel = new BuyerModel(id, name, email, CPF)

            const response: string = await this.buyerDB.insertBuyer(buyerModel)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }

    }

    insertBuyerCard = async (buyerCard: CardDTO): Promise<string> => {
        const { cardHolderId, cardHolderName, cardNumber, cardExpDate, cardCvv } = buyerCard
        try {
            if (cardCvv.toString() === "000") {
                throw new CustomError(404, "Invalid CVV.");
            }
            if (!cardHolderId || !cardHolderName || !cardNumber || !cardExpDate || !cardCvv) {
                throw new CustomError(422, "Fill all the body fields.");
            }
            if (typeof cardHolderId != "string" || typeof cardHolderName != "string" || typeof cardNumber != "string") {
                throw new CustomError(422, "CardHolderName and CardNumber must be a typeof string.");
            }
            if (isNaN(Number(cardCvv))) {
                throw new CustomError(422, "CardCVV must be a typeof number and not equal to 000.");
            }
            if (!CardCvv.includes(cardCvv)) {
                throw new CustomError(404, "Invalid CVV.");
            }

            const checkCardHolder: boolean = await this.buyerDB.getCardHolder(cardHolderId)
            if (!checkCardHolder) {
                throw new CustomError(422, "Invalid cardHolder Id.");
            }

            const replacedCardNumber: string = cardNumber.replace(/ /g, "")
            if (replacedCardNumber.length !== 16) {
                throw new CustomError(422, "CardNumber must have 16 characters.");
            }
            if (isNaN(Number(replacedCardNumber))) {
                throw new CustomError(422, "CardNumber must be a typeof number.");
            }

            const id: string = this.idGenerator.generate()
            const buyerCardModel: CardModel = new CardModel(id, cardHolderId, cardHolderName, cardNumber, cardExpDate, cardCvv)

            const response: string = await this.buyerDB.insertBuyerCard(buyerCardModel)
            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}