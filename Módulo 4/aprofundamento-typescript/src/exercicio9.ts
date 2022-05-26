type Pratos = {
    nome: string,
    custo: number,
    venda: number,
    ingredientes: [{}]
}

type Vendas = {
    cliente: string,
    prato: string
}

const pratos: Pratos[] = [
    {
        nome: "pizza",
        custo: 10,
        venda: 40,
        ingredientes: [{ sal: true }]
    },
    {
        nome: "hamburger",
        custo: 10,
        venda: 40,
        ingredientes: [{ sal: true }]
    }
]

const vendasConcretizadas: Vendas[] = [
    {
        cliente: "Antonio",
        prato: "pizza"
    },
    {
        cliente: "Joao",
        prato: "hamburger"
    }
]

// a)
function cadastraPrato(prato: Pratos) {
    return pratos.push(prato)
}

// b)
function devolveValor(pratoNome: string): number | string {
    let valor: number | string;
    const filterPratos = pratos.filter((prato) => {
        if (pratoNome === prato.nome) {
            return valor = prato.venda
        } else { return valor = "prato não encontrado" }
    })
    return valor
}

// c)
function vendas(venda: Vendas) {
    vendasConcretizadas.push(venda)
}

// d)
let vendasTotal: number = 0;
let custoTotal: number = 0;

function lucroFinalRest() {
    for (let item of vendasConcretizadas) {
        const newFilter = pratos.filter((product) => {
            if (item.prato === product.nome) {
                vendasTotal = vendasTotal + product.venda
                custoTotal = custoTotal + product.custo
            }
        })
    }
}

lucroFinalRest()
console.log(custoTotal)
console.log(vendasTotal)