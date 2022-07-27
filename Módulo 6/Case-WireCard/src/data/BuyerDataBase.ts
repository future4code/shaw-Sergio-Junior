import { CustomError } from "../error/CustomError";
import { BuyerModel } from "../model/BuyerModel";
import { CardModel } from "../model/CardModel";
import { BaseDatabase } from "./BaseDatabase";

export class BuyerDatabase extends BaseDatabase {

    private BUYER_TABLE_NAME = "buyer";
    private BUYER_CARD_TABLE_NAME = "card";

    insertBuyer = async (buyerModel: BuyerModel): Promise<string> => {
        try {
            await this.getConnection()
                .insert(buyerModel)
                .into(this.BUYER_TABLE_NAME)

            return "Buyer has been successfully created."
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    insertBuyerCard = async (buyerCard: CardModel): Promise<string> => {
        try {
            await this.getConnection()
                .insert({
                    id: buyerCard.getId(),
                    card_holder_name: buyerCard.getCardHolderName(),
                    card_number: buyerCard.getCardNumber(),
                    card_exp_date: buyerCard.getCardExpDate(),
                    card_cvv: buyerCard.getCardCvv(),
                })
                .into(this.BUYER_CARD_TABLE_NAME)

            return "Buyer card has been successfully created."
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

}