
type Produtos = {
    nome: string,
    preco: number,
    classificacao: string
}

type Desconto = {
    desconto: number
}

enum DescontoEmNum {
    verao = 5,
    inverno = 10,
    banho = 4,
    intimas = 7
}

function roupasBlackFriday(array: Produtos[]): Produtos[] & Desconto[] {
    const newPrice = array.map((item) => {
        return {
            ...item,
            desconto: (item.preco * DescontoEmNum.intimas) / 100
        }
    })
    return newPrice
}

console.table(roupasBlackFriday([{ nome: "luva", preco: 25, classificacao: "inverno" }]))