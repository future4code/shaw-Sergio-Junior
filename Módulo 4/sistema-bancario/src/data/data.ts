import { User } from "../types"
export const users: User[] = [
    {
        name: "João",
        SIN: "253.789.450-00",
        birthDate: "11/11/1995",
        balance: 1350,
        bankStatement: [
            {
                value: 25,
                date: "10/05/2022",
                description: "Pizza Hut"
            }
        ]
    },
    {
        name: "Maria",
        SIN: "112.765.850-00",
        birthDate: "01/08/1970",
        balance: 11670,
        bankStatement: [
            {
                value: 45,
                date: "10/02/2022",
                description: "McDonalds"
            }
        ]
    }
]