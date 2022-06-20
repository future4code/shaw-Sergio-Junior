//-- Exercicio #6

type Client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Client[] =
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

function clienteEmprestimo(arrClientes: Client[]): Client[] {
    const saldoAtualizado = arrClientes.map((cliente) => {
        let totalDebitos = 0
        for (let i of cliente.debitos) {
            totalDebitos = totalDebitos + i
        }
        return {
            cliente: cliente.cliente,
            saldoTotal: cliente.saldoTotal - totalDebitos,
            debitos: []
        }
    }).filter((cliente) => {
        if (cliente.saldoTotal < 0) {
            return cliente
        }
    })


    return saldoAtualizado
}

console.log(clienteEmprestimo(clientes))