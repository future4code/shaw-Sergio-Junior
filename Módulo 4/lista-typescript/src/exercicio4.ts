//-- Exercicio #4

type Colaboradores = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

enum Setores {
    marketing = "marketing",
    vendas = "vendas",
    financeiro = "financeiro"
}

const pessoasColaboradoras: Colaboradores[] =
    [
        { nome: "Marcos", salário: 2500, setor: Setores.marketing, presencial: true },
        { nome: "Maria", salário: 1500, setor: Setores.vendas, presencial: false },
        { nome: "Salete", salário: 2200, setor: Setores.financeiro, presencial: true },
        { nome: "João", salário: 2800, setor: Setores.marketing, presencial: false },
        { nome: "Josué", salário: 5500, setor: Setores.financeiro, presencial: true },
        { nome: "Natalia", salário: 4700, setor: Setores.vendas, presencial: true },
        { nome: "Paola", salário: 3500, setor: Setores.marketing, presencial: true }
    ]

function localMarketing(arr: Colaboradores[]): Colaboradores[] {
    const marketingTeam = arr.filter((pessoa) => {
        if (pessoa.setor === "marketing" && pessoa.presencial === true) {
            return pessoa
        }
    })

    return marketingTeam
}

console.table(localMarketing(pessoasColaboradoras));
