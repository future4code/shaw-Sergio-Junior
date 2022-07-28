import { BuyerModel } from "../../src/model/BuyerModel"
import { CardModel } from "../../src/model/CardModel"
import { BuyerMock1 } from "./BuyerMock"
import { CardMock1, CardMock2 } from "./CardMock"

export class BuyerDatabaseMock {

    insertBuyer = async (buyerModel: BuyerModel): Promise<string> => {
        switch (buyerModel.getId()) {
            case "id_mock":
                return "Buyer has been successfully created."
            default:
                return "Internal error."
        }
    }

    insertBuyerCard = async (buyerCard: CardModel): Promise<string> => {
        switch (buyerCard.getCardCvv()) {
            case "321":
                return "Buyer card has been successfully created."
            default:
                return "Internal error."
        }
    }

    getCardHolder = async (id: string): Promise<boolean> => {
        switch (id) {
            case "123":
                return true
            case "321":
                return true
            default:
                return false
        }
    }

    getBuyerByEmail = async (email: string): Promise<boolean> => {
        switch (email) {
            case "pop123@gmail.com":
                return true
            default:
                return false
        }
    }

    getBuyerByCPF = async (CPF: string): Promise<boolean> => {
        switch (CPF) {
            case "12546985412":
                return true
            case "12646985412":
                return true
            default:
                return false
        }
    }

}