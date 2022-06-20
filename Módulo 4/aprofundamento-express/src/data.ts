type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const afazeres: Afazer[] = [
    {
        userId: 1,
        id: 1,
        title: "correr",
        completed: true
    },
    {
        userId: 2,
        id: 1,
        title: "comer",
        completed: true
    },
    {
        userId: 3,
        id: 1,
        title: "viajar",
        completed: true
    },
    {
        userId: 4,
        id: 1,
        title: "ler",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "orar",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "fornicar",
        completed: false
    },
    {
        userId: 3,
        id: 2,
        title: "escutar",
        completed: false
    },
    {
        userId: 4,
        id: 2,
        title: "dançar",
        completed: false
    }
]