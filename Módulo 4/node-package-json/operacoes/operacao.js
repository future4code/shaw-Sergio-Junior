//-- Exercício #2
const fs = require('fs');

const operacao = process.argv[2]
const valorUm = Number(process.argv[3])
const valorDois = Number(process.argv[4])
let resultado = Math.round(valorUm - valorDois)

switch (operacao) {
        case "soma":
                resultado = Math.round(valorUm + valorDois)
                break;
        case "subtracao":
                resultado = Math.round(valorUm - valorDois)
                break;
        case "multiplicacao":
                resultado = Math.round(valorUm * valorDois)
                break;
        case "divisao":
                resultado = Math.round(valorUm / valorDois)
                break;
}

operacao && valorUm && valorDois ?
        console.log("\033[34m", `O primeiro valor é: ${valorUm} e o segundo valor é: ${valorDois}.
A ${operacao} dos valores resulta em ${resultado}`)
        :
        console.log("\033[31m", "Um parâmetro está faltando ou incorreto")
