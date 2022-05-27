//-- Exercicio #8

function renovaCarteira(anoAtual: number): boolean {
    const nascimento = prompt("Qual seu ano de nascimento? formato: 'dd/mm/aaaa' ")
    const emissao = prompt("Qual seu ano de emissao? formato: 'dd/mm/aaaa' ")

    const splitNascimento: string[] = nascimento.split("/")
    const splitEmissao: string[] = emissao.split("/")

    const idade: number = anoAtual - Number(splitNascimento[2])
    const tempoDeCarteira: number = anoAtual - Number(splitEmissao[2])
    return (
        idade <= 20 && tempoDeCarteira >= 5 ? true : false
            ||
            idade > 20 && tempoDeCarteira >= 10 ? true : false
                ||
                idade > 50 && tempoDeCarteira >= 15 ? true : false
    )
}

console.log(renovaCarteira(2022))