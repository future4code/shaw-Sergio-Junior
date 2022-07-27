import { Request, Response } from "express";
import { BuyerBusiness } from "../business/BuyerBusiness";
import { CustomError } from "../error/CustomError";
import { BuyerUserDTO, CardDTO } from "../model/BuyerModel";
import { CardModel } from "../model/CardModel";

export class BuyerController {

    constructor(
        private buyerBusiness = new BuyerBusiness
    ) { }

    insertBuyer = async (req: Request, res: Response): Promise<void> => {
        const { name, email, CPF } = req.body
        const buyerUser: BuyerUserDTO = { name, email, CPF }

        try {
            const response: string = await this.buyerBusiness.insertBuyer(buyerUser)

            res.status(201).send({ message: response })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    insertBuyerCard = async (req: Request, res: Response): Promise<void> => {
        const { cardHolderName, cardNumber, cardExpDate, cardCvv } = req.body
        const buyerCard: CardDTO = {
            cardHolderName, cardNumber, cardExpDate, cardCvv
        }
        try {
            const response = await this.buyerBusiness.insertBuyerCard(buyerCard)

            res.status(201).send({ message: response })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }
}