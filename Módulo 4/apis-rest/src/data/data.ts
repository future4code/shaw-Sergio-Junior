import { TypeUser, Type } from "../types"

export let users: TypeUser[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Type.admin,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Type.normal,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Type.normal,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Type.normal,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Type.admin,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Type.admin,
        age: 60
    }
]