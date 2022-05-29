//-- Exercicio #11

const converterRomanos = (numero: number): string => {

    let numeroString: string[] = numero.toString().split('')
    let tamanho: number = numeroString.length
    let numeroRomano: string[] = []

    const addAlgorismo = (check: number, algoritmo: string) => {
        for (let i: number = 0; i < check; i++) {
            numeroRomano.push(algoritmo)
        }
    }

    while (tamanho !== 0) {

        switch (tamanho) {
            case 1:
                const unidade: number = Number(numeroString[0])
                const checkUnidade: number = unidade

                unidade <= 3 && unidade >= 1 && addAlgorismo(checkUnidade, "I")
                unidade === 4 && addAlgorismo(1, "IV")
                unidade < 9 && unidade >= 5 && addAlgorismo(1, "V")
                unidade < 9 && unidade >= 5 && addAlgorismo(unidade - 5, "I")
                unidade < 10 && unidade >= 9 && addAlgorismo(1, "IX")
                break;

            case 2:
                const dezena: number = Number(numeroString[0] + '0')
                const checkDezena: number = dezena / 10

                dezena <= 30 && dezena >= 10 && addAlgorismo(checkDezena, "X")
                dezena === 40 && addAlgorismo(1, "XL")
                dezena < 90 && dezena >= 50 && addAlgorismo(1, "L")
                dezena < 90 && dezena >= 50 && addAlgorismo((dezena - 50) / 10, "X")
                dezena < 100 && dezena >= 90 && addAlgorismo(1, "XC")
                break;

            case 3:
                const centena: number = Number(numeroString[0] + '00')
                const checkCentena: number = centena / 100

                centena <= 300 && centena >= 100 && addAlgorismo(checkCentena, "C")
                centena === 400 && addAlgorismo(1, "CD")
                centena < 900 && centena >= 500 && addAlgorismo(1, "D")
                centena < 900 && centena >= 500 && addAlgorismo((centena - 500) / 100, "C")
                centena < 1000 && centena >= 900 && addAlgorismo(1, "CM")
                break;

            case 4:
                const milhar: number = Number(numeroString[0] + '000')
                const checkMilhar: number = milhar / 1000

                addAlgorismo(checkMilhar, "M")
                break;
        }

        numeroString.shift()
        tamanho = numeroString.length
    }

    return numeroRomano.join('')
}

console.log(converterRomanos(1999))