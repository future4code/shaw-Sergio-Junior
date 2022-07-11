import { Casino, LOCATION, NACIONALITY, UserCasino } from "../model/CasinoInterface";
import { User } from "../model/UserInterface"
import { performPurchase, verifyAge } from "../src"

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

});

describe("Testing function verifyAge", () => {

    test("Testing brazilian in Brazil.", () => {
        const casino: Casino = {
            name: "Conrado",
            location: LOCATION.BRAZIL
        }

        const user: UserCasino = {
            name: "Joao",
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const result = verifyAge(casino, [user])

        expect(result).toEqual({ "americans": { "allowed": [], "unallowed": [] }, "brazilians": { "allowed": [user.name], "unallowed": [] } })
    })

    test("Testing american in Brazil.", () => {
        const casino: Casino = {
            name: "Conrad",
            location: LOCATION.BRAZIL
        }

        const user: UserCasino = {
            name: "John",
            age: 20,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casino, [user])

        expect(result).toEqual({ "americans": { "allowed": [user.name], "unallowed": [] }, "brazilians": { "allowed": [], "unallowed": [] } })
    })

    test("Testing brazilians and americans aged 19yrs old in USA.", () => {
        const casino: Casino = {
            name: "Peter Crown",
            location: LOCATION.EUA
        }

        const user: UserCasino[] = [
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Manuela",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mary",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jonny",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const result = verifyAge(casino, user)

        expect(result).toEqual({
            "americans": { "allowed": [], "unallowed": ["Mary", "Jonny"] },
            "brazilians": { "allowed": [], "unallowed": ["Maria", "Manuela"] }
        })
    })

    test("Testing brazilians (19yrs) and americans (21yrs old) in USA.", () => {
        const casino: Casino = {
            name: "Peter Crown",
            location: LOCATION.EUA
        }

        const user: UserCasino[] = [
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Manuela",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Mary",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jonny",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const result = verifyAge(casino, user)

        expect(result).toEqual({
            "americans": { "allowed": ["Mary", "Jonny"], "unallowed": [] },
            "brazilians": { "allowed": [], "unallowed": ["Maria", "Manuela"] }
        })
    })

    // test("Testing users ages.", () => {
    //     const casino: Casino = {
    //         name: "Conrad",
    //         location: LOCATION.EUA
    //     }

    //     const user: UserCasino = {
    //         name: "Maria",
    //         age: 25,
    //         nacionality: NACIONALITY.BRAZILIAN
    //     }

    //     const result = verifyAge(casino, [user])

    //     expect(result).toEqual({ "americans": { "allowed": [], "unallowed": [] }, "brazilians": { "allowed": [user.name], "unallowed": [] } })
    // })
})