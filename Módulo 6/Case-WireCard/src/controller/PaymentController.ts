import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { PaymentDTO } from "../model/PaymentModel";
import { PaymentResponseData, PaymentStatusData } from "../model/PaymentStatusModel";

export class PaymentController {

    constructor(
        private paymentBusiness = new PaymentBusiness
    ) { }

    insertPayment = async (req: Request, res: Response): Promise<void> => {
        const { productOwnerId, buyerId, amount, paymentMethod } = req.body
        const payment: PaymentDTO = { productOwnerId, buyerId, amount, paymentMethod }
        try {
            const response = await this.paymentBusiness.insertPayment(payment)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getPaymentStatus = async (req: Request, res: Response): Promise<void> => {
        const id: string = req.params.id as string
        try {
            const response: PaymentResponseData = await this.paymentBusiness.getPaymentStatus(id)

            res.status(200).send({ paymentInfo: response })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }
}