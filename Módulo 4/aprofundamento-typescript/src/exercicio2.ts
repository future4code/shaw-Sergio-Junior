//-- Exercicio #2 

//a) 
// Entra um array de numeros e retorna um objeto com o maior, o menor e a media

//b)
//  numerosOrdenados (um array dos numeros em ordem crescente) 
//  soma (variavel para fazer a soma de todos os numeros nesse array)
//  estatisticas (objeto das estatisticas propostas)

//c)  

type Amostra = { maior: number, menor: number, media: number }

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Amostra
}

const amostraDeDados: AmostraDeDados = {
    numeros: [2, 6, 8, 4, 9, 3],
    obterEstatisticas: (numeros): Amostra => {
        const numerosOrdenados: number[] = numeros.sort(
            (a, b) => a - b
        )

        let soma: number | null = null

        for (let num of numeros) {
            soma += num
        }

        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }

        return estatisticas
    }
}

console.table(amostraDeDados.obterEstatisticas(amostraDeDados.numeros))