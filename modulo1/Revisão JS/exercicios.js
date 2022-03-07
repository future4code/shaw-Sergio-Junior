// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) {
        if (a < b) {
            return - 1
        } else {
            return 1
        }
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i] ** 2)
        }
    }
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++)
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    for (let i = 0; i <= n; i++) {

    }
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    }
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }
    if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novaArray = []
    for (let i = 0; i < array.length; i++) {
        let maiorNumero = 0
        let segundoMaior = 0
        let menorNumero = Infinity
        let segundoMenor = Infinity
        if (maiorNumero < array[i]) {
            maiorNumero = array[i]
        } else if (segundoMaior < array[i] && segundoMaior < maiorNumero) {
            segundoMaior = array[i]
            novaArray.push(segundoMaior)
        }
        if (menorNumero > array[i]) {
            menorNumero = array[i]
        } else if (segundoMenor > array[i] && segundoMenor > menorNumero) {
            segundoMenor = array[i]
            novaArray.push(segundoMenor)
        }
    }
    return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novoObejot = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoObejot
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let contaNova = contas.map((conta) => {
        let soma = 0
        for (let i = 0; i < conta.compras.length; i++) {
            soma = soma + conta.compras[i]
        }
        conta.saldoTotal = conta.saldoTotal - soma
        return conta.saldoTotal

    })
    return (contas)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}