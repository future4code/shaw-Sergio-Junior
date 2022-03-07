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
    let maiorNumero = 0
    if (num1 > num2) {
        maiorNumero = num1
    } else {
        maiorNumero = num2
    }
    let menorNumero = 0
    if (num1 < num2) {
        menorNumero = num1
    } else {
        menorNumero = num2
    }
    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    let diferenca = maiorNumero - menorNumero
    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeros = []
    for (let i = 0; i < n * 2; i++) {
        if (numeros[i] % 2 === 0) {
            numeros.push(numeros[i])
        }
    }
    numeros.length = n
    return numeros
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
    let maiorNumero = 0
    let menorNumero = Infinity
    for (let i = 0; i < array.length; i++) {
        if (maiorNumero < array[i]) {
            maiorNumero = array[i]
        }
        if (menorNumero > array[i]) {
            menorNumero = array[i]
        }
    }
    let a = indexOf(maiorNumero)
    let b = indexOf(menorNumero)
    array.splice(a, 1)
    array.splice(b, 1)
    return array
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
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
            return pessoa
        }
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5) {
            return pessoa
        }
    })
    return pessoasNaoAutorizadas
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