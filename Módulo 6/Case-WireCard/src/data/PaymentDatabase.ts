import { CustomError } from "../error/CustomError";
import { BuyerModel } from "../model/BuyerModel";
import { CardModel } from "../model/CardModel";
import { PaymentModel } from "../model/PaymentModel";
import { PaymentStatusData, PaymentStatusModel } from "../model/PaymentStatusModel";
import { ProductOwnerModel } from "../model/ProductOwnerModel";
import { BaseDatabase } from "./BaseDatabase";

export class PaymentDatabase extends BaseDatabase {

    private BUYER_CARD_TABLE_NAME = "card";
    private PAYMENT_TABLE_NAME = "payment";
    private PAYMENT_STATUS_TABLE_NAME = "payment_status";
    private PRODUCT_OWNER_TABLE_NAME = "product_owner";
    private BUYER_TABLE_NAME = "buyer";


    insertPayment = async (paymentInfo: PaymentModel, paymentStatusModel: PaymentStatusModel): Promise<void> => {
        try {
            await this.getConnection()
                .insert({
                    id: paymentInfo.getId(),
                    product_owner_id: paymentInfo.getProductOwnerId(),
                    buyer_id: paymentInfo.getBuyerId(),
                    amount: paymentInfo.getAmount(),
                    payment_method: paymentInfo.getPaymentMethod()
                })
                .into(this.PAYMENT_TABLE_NAME)

            await this.getConnection()
                .insert({
                    payment_id: paymentStatusModel.getPaymentId(),
                    payment_status: paymentStatusModel.getPaymentStatus()
                })
                .into(this.PAYMENT_STATUS_TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getCreditCard = async (buyerId: string): Promise<boolean> => {
        try {
            const response: CardModel[] = await this.getConnection()
                .select()
                .from(this.BUYER_CARD_TABLE_NAME)
                .where({ card_holder_id: buyerId })

            return response.length ? true : false
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getBuyerById = async (buyerId: string): Promise<boolean> => {
        try {
            const response: BuyerModel[] = await this.getConnection()
                .select()
                .from(this.BUYER_TABLE_NAME)
                .where({ id: buyerId })

            return response.length ? true : false
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getProductOwnerById = async (productOwnerId: string): Promise<boolean> => {
        try {
            const response: ProductOwnerModel[] = await this.getConnection()
                .select()
                .from(this.PRODUCT_OWNER_TABLE_NAME)
                .where({ id: productOwnerId })

            return response.length ? true : false
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getPaymentStatus = async (paymentId: string): Promise<PaymentStatusData | undefined> => {
        try {
            const response: PaymentStatusData[] = await this.getConnection()
                .select(
                    "payment_status.payment_id", "payment.payment_method",
                    "payment_status.payment_status", "payment.amount",
                    "payment.buyer_id", "payment.product_owner_id"
                )
                .from(this.PAYMENT_STATUS_TABLE_NAME)
                .join(this.PAYMENT_TABLE_NAME, "payment_status.payment_id", "payment.id")
                .where({ payment_id: paymentId })

            return response[0]
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

}