//-- Exercicio #9

function recebePalavra(palavra: string): number {
    let stringLength: number = palavra.length
    let numeroFatorial = stringLength
    for (let i = 1; i < stringLength; i++) {
        numeroFatorial = numeroFatorial * i
    }

    return numeroFatorial > 0 ? numeroFatorial : 1
}

console.log(recebePalavra("oiiiiiiiiiii"))