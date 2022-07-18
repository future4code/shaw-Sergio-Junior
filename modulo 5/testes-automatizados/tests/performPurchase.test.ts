import { Casino, LOCATION, NACIONALITY, UserCasino } from "../model/CasinoInterface";
import { User } from "../model/UserInterface"
import { performPurchase, PostData, PostModel, verifyAge } from "../src"

// describe("Testing function performPurchase", () => {

//     test("Testing balance higher than purchase value.", () => {
//         const user: User = {
//             name: "Joao",
//             balance: 100
//         }

//         const result = performPurchase(user, 80)

//         expect(result).toEqual({
//             name: "Joao",
//             balance: 20
//         })
//     })

//     test("Testing balance equals purchase value.", () => {
//         const user: User = {
//             name: "Joao",
//             balance: 100
//         }

//         const result = performPurchase(user, 100)

//         expect(result).toEqual({
//             name: "Joao",
//             balance: 0
//         })
//     })

//     test("Testing balance lower than purchase value.", () => {
//         const user: User = {
//             name: "Joao",
//             balance: 80
//         }

//         const result = performPurchase(user, 100)

//         expect(result).not.toBeDefined()
//     })

// });


describe("Testing function verifyAge", () => {
    // #region DESAFIO 3 E 4
    // a, b, c ,d :
    // test("Testing brazilian in Brazil.", () => {
    //     const casino: Casino = {
    //         name: "Conrado",
    //         location: LOCATION.BRAZIL
    //     }

    //     const user: UserCasino = {
    //         name: "Joao",
    //         age: 18,
    //         nacionality: NACIONALITY.BRAZILIAN
    //     }

    //     const result = verifyAge(casino, [user])

    //     expect(result).toEqual({ "americans": { "allowed": [], "unallowed": [] }, "brazilians": { "allowed": [user.name], "unallowed": [] } })
    // })

    // test("Testing american in Brazil.", () => {
    //     const casino: Casino = {
    //         name: "Conrad",
    //         location: LOCATION.BRAZIL
    //     }

    //     const user: UserCasino = {
    //         name: "John",
    //         age: 20,
    //         nacionality: NACIONALITY.AMERICAN
    //     }

    //     const result = verifyAge(casino, [user])

    //     expect(result).toEqual({ "americans": { "allowed": [user.name], "unallowed": [] }, "brazilians": { "allowed": [], "unallowed": [] } })
    // })

    // test("Testing brazilians and americans aged 19yrs old in USA.", () => {
    //     const casino: Casino = {
    //         name: "Peter Crown",
    //         location: LOCATION.EUA
    //     }

    //     const user: UserCasino[] = [
    //         {
    //             name: "Maria",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         },
    //         {
    //             name: "Manuela",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         },
    //         {
    //             name: "Mary",
    //             age: 19,
    //             nacionality: NACIONALITY.AMERICAN
    //         },
    //         {
    //             name: "Jonny",
    //             age: 19,
    //             nacionality: NACIONALITY.AMERICAN
    //         }
    //     ]

    //     const result = verifyAge(casino, user)

    //     expect(result).toEqual({
    //         "americans": { "allowed": [], "unallowed": ["Mary", "Jonny"] },
    //         "brazilians": { "allowed": [], "unallowed": ["Maria", "Manuela"] }
    //     })
    // })

    // test("Testing brazilians (19yrs) and americans (21yrs old) in USA.", () => {
    //     const casino: Casino = {
    //         name: "Peter Crown",
    //         location: LOCATION.EUA
    //     }

    //     const user: UserCasino[] = [
    //         {
    //             name: "Maria",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         },
    //         {
    //             name: "Manuela",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         },
    //         {
    //             name: "Mary",
    //             age: 21,
    //             nacionality: NACIONALITY.AMERICAN
    //         },
    //         {
    //             name: "Jonny",
    //             age: 21,
    //             nacionality: NACIONALITY.AMERICAN
    //         }
    //     ]

    //     const result = verifyAge(casino, user)

    //     expect(result).toEqual({
    //         "americans": { "allowed": ["Mary", "Jonny"], "unallowed": [] },
    //         "brazilians": { "allowed": [], "unallowed": ["Maria", "Manuela"] }
    //     })
    // })
    //#endregion DESAFIO 3 E 4

    //#region  DESAFIO 5
    // a:
    // test("Testing brazilians in BRAZIL. ", () => {
    //     const casino: Casino = {
    //         name: "Pedro Crão",
    //         location: LOCATION.BRAZIL
    //     }

    //     const user: UserCasino[] = [
    //         {
    //             name: "Maria",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         }
    //     ]

    //     const result = verifyAge(casino, user)
    //     expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    //     expect(result.brazilians.allowed.length).toBeLessThan(2)
    // })


    //     test("Testing american in BRAZIL. ", () => {
    //         const casino: Casino = {
    //             name: "Pedro Crão",
    //             location: LOCATION.BRAZIL
    //         }

    //         const user: UserCasino[] = [
    //             {
    //                 name: "Mary",
    //                 age: 19,
    //                 nacionality: NACIONALITY.AMERICAN
    //             }
    //         ]

    //         const result = verifyAge(casino, user)
    //         expect(result.americans.allowed.length).toBeGreaterThan(0)
    //     })


    //     test("Testing brazilians and americans contain unallowed user name.", () => {
    //         const casino: Casino = {
    //             name: "Peter Crown",
    //             location: LOCATION.EUA
    //         }

    //         const user: UserCasino[] = [
    //             {
    //                 name: "Maria",
    //                 age: 19,
    //                 nacionality: NACIONALITY.BRAZILIAN
    //             },
    //             {
    //                 name: "Manuela",
    //                 age: 19,
    //                 nacionality: NACIONALITY.BRAZILIAN
    //             },
    //             {
    //                 name: "Mary",
    //                 age: 19,
    //                 nacionality: NACIONALITY.AMERICAN
    //             },
    //             {
    //                 name: "Jonny",
    //                 age: 19,
    //                 nacionality: NACIONALITY.AMERICAN
    //             }
    //         ]

    //         const result = verifyAge(casino, user)

    //         expect(result.brazilians.unallowed).toContain("Maria")
    //         expect(result.americans.unallowed).toContain("Jonny")
    //     })


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

    //#endregion DESAFIO 5

    //#region DESAFIO 6

    // Para treinar os testes das funções assíncronas, vamos pedir para que você pegue
    // a classe que cria um post do projeto LaBook da semana passada.
    // Lembre - se de pegar as variáveis de ambiente, instalar e configurar o`dotenv`

    // a)Comece escrevendo um teste que crie um post no banco de 
    // dados e verifique se ele foi criado(fazendo uma query pelo id)

    // b)Faça a configuração do `afterAll`.O que precisamos fazer
    // quando os testes acabam ?
    const postDb = new PostData()
    test("Create post DB.", async () => {
        const post: PostModel = new PostModel(
            "123456", "test", "description test",
            "EVENT", "2020/03/03", "71cf2654-28b3-4730-a5b6-ad7598f4aad1"
        )

        await postDb.createPost(post)

        const result = await postDb.getPostById(post.id)

        expect(result.length).not.toBe(0)
    })

    //#endregion DESAFIO 6
})