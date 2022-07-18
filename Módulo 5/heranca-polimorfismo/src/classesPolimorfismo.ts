export interface Client {
    name: string;
    // Refere-se ao nome do cliente
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
    calculateBill(): number;
    // Retorna o valor da conta em reais
}

export abstract class Place {
    protected cep: string;

    constructor(cep: string) {
        this.cep = cep
    }

    public getCep(): string {
        return this.cep;
    }
}

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa
        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }

    public getCep(): string {
        return this.cep
    }
}

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.75)
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar
        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }

    public getCep(): string {
        return this.cep
    }
}

export class CommercialClient extends Commerce implements Client {
    constructor(
        private CNPJ: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.CNPJ
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 
        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }

    public getCep(): string {
        return this.cep
    }
}

export class IndustrialClient extends Industry implements Client {
    constructor(
        private industrialRegister: number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustrialRegister(): number {
        return this.industrialRegister
    }

    public calculateBill(): number {
        return ((this.consumedEnergy * 0.45) + (this.machinesQuantity * 100))
    }

}
