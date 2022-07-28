import { BuyerBusiness } from "../src/business/BuyerBusiness"
import { PaymentBusiness } from "../src/business/PaymentBusiness"
import { ProductOwnerBusiness } from "../src/business/ProductOwnerBusiness"
import { BuyerDatabaseMock } from "./mocks/BuyerDataBaseMock"
import { BuyerMockDTOFail, BuyerMockDTOSucess } from "./mocks/BuyerMock"
import { CardMockDTO2Fail, CardMockDTOSuccess } from "./mocks/CardMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PaymentDatabaseMock } from "./mocks/PaymentDatabaseMock"
import { PaymentMockDTOFailure, PaymentMockDTOSuccess } from "./mocks/PaymentMock"
import { PaymenResponseDataMock } from "./mocks/PaymentStatusMock"
import { ProductOwnerDatabaseMock } from "./mocks/ProductOwnerDataBaseMock"

const buyerBusinessMock = new BuyerBusiness(
    new BuyerDatabaseMock as any,
    new IdGeneratorMock
)

const paymentBusinessMock = new PaymentBusiness(
    new PaymentDatabaseMock as any,
    new IdGeneratorMock
)

const productOwnerBusinessMock = new ProductOwnerBusiness(
    new IdGeneratorMock,
    new ProductOwnerDatabaseMock as any
)

const token = "TOKEN"

describe("Buyer table tests, success", () => {
    test("Insert buyer, success.", async () => {
        expect.assertions(1)
        try {
            const result = await buyerBusinessMock.insertBuyer(BuyerMockDTOSucess)
            expect(result).toBe("Buyer has been successfully created.")
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("Insert buyer, failure.", async () => {
        expect.assertions(1)
        try {
            const result = await buyerBusinessMock.insertBuyer(BuyerMockDTOFail)
        } catch (error: any) {
            expect(error.message).toBe("Email already exists.")
        }
    })

    test("Insert buyer card, success.", async () => {
        expect.assertions(1)
        try {
            const result = await buyerBusinessMock.insertBuyerCard(CardMockDTOSuccess)
            expect(result).toBe("Buyer card has been successfully created.")
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("Insert buyer card, failure.", async () => {
        expect.assertions(1)
        try {
            await buyerBusinessMock.insertBuyerCard(CardMockDTO2Fail)
        } catch (error: any) {
            expect(error.message).toBe("Invalid cardHolder Id.")
        }
    })
})

describe("Payment table tests!", () => {
    test("Insert payment, success.", async () => {
        expect.assertions(1)
        try {
            const result = await paymentBusinessMock.insertPayment(PaymentMockDTOSuccess)
            expect(result).toStrictEqual({ paymentStatus: "PAID" })
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("Get payment status, success.", async () => {
        expect.assertions(1)
        try {
            const result = await paymentBusinessMock.getPaymentStatus("id_mock")
            expect(result).toStrictEqual(PaymenResponseDataMock)
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("Insert payment, failure.", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.insertPayment(PaymentMockDTOFailure)
        } catch (error: any) {
            expect(error.message).toBe("Invalid productOwnerId.")
        }
    })

    test("Get payment status, failure.", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.getPaymentStatus("wrong_id")
        } catch (error: any) {
            expect(error.message).toBe("Invalid payment id.")
        }
    })
})

describe("Product Owner table tests!", () => {
    test("Insert product owner, success.", async () => {
        expect.assertions(1)
        try {
            const result = await productOwnerBusinessMock.insertProductOwner()
            expect(result).toBe("New productOwner created successfully.")
        } catch (error: any) {
            console.log(error.message)
        }
    })
})

