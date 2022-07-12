import { Casino, LOCATION, NACIONALITY, UserCasino } from "../model/CasinoInterface";
import { User } from "../model/UserInterface"
import { performPurchase, PostData, verifyAge } from "../src"
import { Post, PostModel } from "../src/model/PostModel";

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

// DESAFIO 3 E 4
// a, b, c ,d :
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

    // DESAFIO 5
    // a:
    test("Testing brazilians in BRAZIL. ", () => {
        const casino: Casino = {
            name: "Pedro Crão",
            location: LOCATION.BRAZIL
        }

        const user: UserCasino[] = [
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino, user)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    // b:
    test("Testing american in BRAZIL. ", () => {
        const casino: Casino = {
            name: "Pedro Crão",
            location: LOCATION.BRAZIL
        }

        const user: UserCasino[] = [
            {
                name: "Mary",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const result = verifyAge(casino, user)
        expect(result.americans.allowed.length).toBeGreaterThan(0)
    })

    // c:
    test("Testing brazilians and americans contain unallowed user name.", () => {
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

        expect(result.brazilians.unallowed).toContain("Maria")
        expect(result.americans.unallowed).toContain("Jonny")
    })

    // d:
    test("Testing brazilians 19yrs old and americans 21yrs old.", () => {
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

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })
})
