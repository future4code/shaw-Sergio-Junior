import { User } from "../model/UserInterface"
import { performPurchase } from "../src"

describe("Testing function performPurchase", () => {

    test("Testing balance higher than purchase value.", () => {
        const user: User = {
            name: "Joao",
            balance: 100
        }

        const result = performPurchase(user, 80)

        expect(result).toEqual({
            name: "Joao",
            balance: 20
        })
    })

    test("Testing balance equals purchase value.", () => {
        const user: User = {
            name: "Joao",
            balance: 100
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Joao",
            balance: 0
        })
    })

    test("Testing balance lower than purchase value.", () => {
        const user: User = {
            name: "Joao",
            balance: 80
        }

        const result = performPurchase(user, 100)

        expect(result).not.toBeDefined()
    })

})