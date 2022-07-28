import { PaymentDatabase } from "../data/PaymentDatabase";
import { CustomError } from "../error/CustomError"
import { PaymentDTO, PaymentModel, PAYMENT_METHOD } from "../model/PaymentModel"
import { PaymentResponseData, PaymentStatusData, PaymentStatusModel, PAYMENT_STATUS } from "../model/PaymentStatusModel";
import { IdGenerator } from "../services/IdGenerator";

export class PaymentBusiness {
    constructor(
        private paymentDB = new PaymentDatabase,
        private idGenerator = new IdGenerator
    ) { }
    insertPayment = async (payment: PaymentDTO): Promise<object> => {

        const { productOwnerId, buyerId, amount, paymentMethod } = payment

        try {
            if (!productOwnerId || !buyerId || !amount || !paymentMethod) {
                throw new CustomError(422, "Fill all the fields.");
            }
            if (paymentMethod.toUpperCase() !== PAYMENT_METHOD.BOLETO &&
                paymentMethod.toUpperCase() !== PAYMENT_METHOD.CREDIT_CARD) {
                throw new CustomError(422, "Invalid payment method, it must be 'BOLETO' or 'CREDIT CARD'");
            }
            if (typeof productOwnerId !== "string" || typeof buyerId !== "string") {
                throw new CustomError(422, "ProductOwnerId and BuyerId must be typeof string.");
            }
            if (typeof amount !== "number") {
                throw new CustomError(422, "Typeof amount must be a valid number.");
            }

            const id: string = this.idGenerator.generate()
            let paymentStatus: PAYMENT_STATUS = PAYMENT_STATUS.NOT_PAID

            const checkProductOwnerId: boolean = await this.paymentDB.getProductOwnerById(productOwnerId)
            if (!checkProductOwnerId) {
                throw new CustomError(422, "Invalid productOwnerId.");
            }

            const checkBuyerId: boolean = await this.paymentDB.getBuyerById(buyerId)
            if (!checkBuyerId) {
                throw new CustomError(422, "Invalid buyerId.");
            }

            const checkCreditCard: boolean = await this.paymentDB.getCreditCard(buyerId)
            if (paymentMethod === PAYMENT_METHOD.CREDIT_CARD && checkCreditCard) {
                paymentStatus = PAYMENT_STATUS.PAID
            }

            const paymentStatusModel: PaymentStatusModel = new PaymentStatusModel(
                id, paymentStatus
            )
            const paymentModel: PaymentModel = new PaymentModel(
                id, productOwnerId, buyerId, amount, paymentMethod
            )

            await this.paymentDB.insertPayment(paymentModel, paymentStatusModel)

            switch (paymentMethod) {
                case PAYMENT_METHOD.BOLETO:
                    return { boleto: new Date().getTime() }
                case PAYMENT_METHOD.CREDIT_CARD:
                    return { paymentStatus: paymentStatus }
                default:
                    return { message: "Internal error." };
            }
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getPaymentStatus = async (id: string): Promise<PaymentResponseData> => {
        try {
            const result: PaymentStatusData | undefined = await this.paymentDB.getPaymentStatus(id)
            if (!result) {
                throw new CustomError(422, "Invalid payment id.");
            }

            const response: PaymentResponseData = {
                id: result?.payment_id as string,
                paymentMethod: result?.payment_method as PAYMENT_METHOD,
                status: result?.payment_status as PAYMENT_STATUS,
                amount: result?.amount as number,
                buyerId: result?.buyer_id as string,
                productOwner: result?.product_owner_id as string
            }

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}