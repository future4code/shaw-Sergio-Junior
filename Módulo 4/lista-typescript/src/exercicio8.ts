//-- Exercicio #8
// const nascimento = prompt("Qual seu ano de nascimento? ")
// const emissao = prompt("Qual seu ano de emissao? ")

function renovaCarteira(nascimento: string, emissao: string): boolean {

    const anoAtual: number = new Date().getTime()
    const nascimentoNumber: number = new Date(nascimento).getTime()
    const emissaoNumber: number = new Date(emissao).getTime()

    const idade = anoAtual - nascimentoNumber
    const tempoDeCarteira: number = anoAtual - emissaoNumber



    return (
        idade <= 630720000000 && tempoDeCarteira >= 157680000000 ? true : false
            ||
            idade > 630720000000 && tempoDeCarteira >= 315360000000 ? true : false
                ||
                idade > 1576800000000 && tempoDeCarteira >= 473040000000 ? true : false
    )
}

console.log(renovaCarteira("2003/01/01", "2015/01/01"))