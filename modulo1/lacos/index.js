// // EXERCICIOS DE INTERPRETACAO // // 


// 1: 
// O código abaixo declarou i com valor igual a 
// zero e está adicionando 1 a i enquanto ele for 
// menor que 5. E o valor que inicialmente era 
// zero agora será igual 0 + i (1) em cada loop.
// O resultado impresso no console será, após completar
// o loop : 10 


// 2: 
// a) 19, 21, 23, 25, 27, 30 
// b) É suficiente mas teriamos que usar a função indexOf() 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   let i = lista.indexOf(numero)
// 		console.log(i)
// 	}

// 3: Será impresso : "****" 



// // // EXERCICIOS DE ESCRITA DE CÓDIGO // // 

// //1.

// let bichinhos = Number(prompt("Quantos bichinhos você tem?"))
// let arrayPet = []
// let nomePet = "0"

// if (bichinhos <= 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     for (let quantosPet = 0; quantosPet < bichinhos; quantosPet = quantosPet + 1) {
//         nomePet = prompt("Digite o nome do Pet:")
//         arrayPet.push(nomePet)
//     }
//     console.log(arrayPet)
// }

// //2.
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// //a) Escreva um programa que ** imprime ** cada um dos valores do array original.
// function imprimeOriginal(array) {
//     for (let imprime of array) {
//         console.log(imprime)
//     }
// }
// imprimeOriginal(arrayOriginal)

// //b) Escreva um programa que ** imprime ** cada um dos valores do array original divididos por 10
// function imprimeDivisaoPorDez(arrayDivisao) {
//     for (let imprime of arrayDivisao) {
//         let imprimeDez = imprime / 10
//         console.log(imprimeDez)
//     }
// }
// imprimeDivisaoPorDez(arrayOriginal)

// //c) Escreva um programa que ** crie ** um novo array contendo, somente, os números pares
// //do array original e ** imprima ** esse novo array

// let par = 0
// let novoArray = []
// function buscaPar(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             par = array[i]
//             novoArray.push(par)
//         }
//     }
//     console.log(novoArray)
// }
// buscaPar(arrayOriginal)

// //d) Escreva um programa que ** crie ** um novo array contendo strings, da seguinte forma:
// //"O elemento do índex `i` é: `numero`".Depois, ** imprima ** este novo array.

// let novoArray = []
// let string = ""
// function soString(array) {
//     for (let i = 0; i < array.length; i++) {
//         string = `O elemento do índex ${i} é: ${array[i]}.`
//         novoArray.push(string)
//     }
//     console.log(novoArray)
// }

// soString(arrayOriginal)


// //e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


// let num = 0
// function buscaMaior(arrayOri) {
//     for (let i = 0; i < arrayOri.length; i++) {
//         if (arrayOri[i] > num) {
//             num = arrayOri[i]
//         }
//     }
//     console.log(num)
// }

// buscaMaior(arrayOriginal)


// function buscaMenor(arrayOrin) {
//     let menorNumero = 0
//     for (let i = 0; i < arrayOrin.length; i++) {
//         if (arrayOrin[i] < menorNumero) {
//             menorNumero = arrayOrin[i]
//         }
//     }
//     console.log(menorNumero)
// }

// buscaMenor(arrayOriginal)
