export type User = {
    name: string,
    SIN: string,
    birthDate: string,
    balance: number,
    bankStatement: BankStatement[] | []
}

export type NewUser = {
    name: string,
    SIN: string,
    birthDate: string,
}

export type Balance = {
    name: string,
    SIN: string,
    balance?: number
}

export type BankStatement = {
    value: number,
    date: string,
    description: string,
    SIN?: string
}

export type Transfer = {
    nameFrom: string,
    SINFrom: string,
    nameTo: string,
    SINTo: string,
    value: number
}