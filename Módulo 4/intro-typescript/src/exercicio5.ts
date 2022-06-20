function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number): string {
    // const anoAtual = Number(prompt("Digite o ano atual"))
    // const anoNascimento = Number(prompt("Digite o ano de nascimento"))
    // const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

    const idade: number = anoAtual - anoNascimento
    const tempoCarteira: number = anoAtual - anoEmissao

    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3 ? "precisa renovar" : "não precisa renovar")
}


console.log(checaRenovacaoRG(2022, 1995, 2015))