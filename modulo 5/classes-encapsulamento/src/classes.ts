export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getAccount(): object {
        return {
            cpf: this.cpf,
            name: this.name,
            age: this.age,
            balance: this.balance,
            transactions: this.transactions
        }
    }

}

export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription(): string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }
}

export class Bank {
    private accounts: UserAccount[];

    constructor(account: UserAccount[]) {
        this.accounts = account
    }

    public getAccounts() {
        return this.accounts
    }
}
