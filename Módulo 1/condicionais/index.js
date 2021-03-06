// // EXERCICIOS DE INTERPRETAÇAO DE CÓDIGO // //

// 1. 
//  a) O código faz uma pergunta para o usuário e testa esse número para verificar se é par ou não. 
//  b) Para números pares ele imprime "passou no teste" 
//  c) Para numeros com resto de divisão por 2, ou seja, numeros impares.

// 2. 
//  a) Para o usuário saber o preço de determinada fruta. 
//  b) Para maçã: O preço da fruta maçã é R$2.25
//  c) O preço da fruta pera é R$5 (último valor atribuído a preço) 

// 3. 
//  a) A primeira linha está pedindo ao usuário que digite um número.
//  b) Para o número 10 teremos: Esse número passou no teste 
//  b) Para o número -10 teremos não teremos nada 
//  c) console.log(mensagem) terá erro pois não temos a variavel mensagem dentro do escopo global e sim do escopo local. 

// // EXERCICIOS DE ESCRITA DE CODIGO // // 


//1. 
// let idadeUser = Number(prompt("digite sua idade:"))
//     if (idadeUser >= 18) {
//     console.log("Você pode dirigir")    
//     } else {console.log("Você não pode dirigir")}  

//2.
// let turnoEstuda = prompt("Qual turno estuda: M, V ou N?")
// if (turnoEstuda.toUpperCase() === "M") {
// console.log("Bom dia!")}
//     else if(turnoEstuda.toUpperCase() === "V"){ 
//     console.log("Boa tarde!")}
//         else if(turnoEstuda.toUpperCase() === "N"){
//         console.log("Boa tarde!")
//         }  

//3. 
// let turnoEstuda = prompt("Qual turno estuda: M, V ou N?")
//     switch (turnoEstuda.toUpperCase()) {
//         case 'M': console.log("Bom dia!")            
//         break; 
//             case 'V': console.log("Boa tarde!")
//             break; 
//                 case 'N': console.log("Boa Noite!")
//                 break; 
//     }    

//4. 
// let generoFilme = prompt("Qual gênero do filme vão assistir?").toLowerCase() === 'fantasia'
// let valorIngresso = Number(prompt("Qual o valor do ingresso")) === 15

// if (generoFilme && valorIngresso) {
//     console.log("Bom filme")
// } else { console.log("Escolha outro filme:") }




// // DESAFIOS // //

//1.
// let generoFilme = prompt("Qual gênero do filme vão assistir?").toLowerCase() === 'fantasia'
// let valorIngresso = Number(prompt("Qual o valor do ingresso")) === 15

// if (generoFilme && valorIngresso) {
//     let lanchinho = prompt("Qual lanche você gostaria de comer?")
//     console.log(`Bom filme e aproveite seu/sua ${lanchinho}`)
// } else { console.log("Escolha outro filme:") }

//2. 

let nomeCompleto = prompt("Digite seu nome completo:")
let etapaJogo = prompt("Digite a etapa do jogo, sendo: SF (para semi-final), DT (disputa terceiro lugar) ou FI (para etapa final)")
let categoriaIngresso = Number(prompt("Digite a categoria do seu ingresso: 1, 2, 3 ou 4?"))
let localJogo = prompt("Jogo IN (internacional) ou DO (nacional)?")
let quantidadeIngresso = Number(prompt("Digite quantos ingressos gostaria de comprar:"))
let valorIngresso

/* Preciso saber a etapa para então saber a categoria do ingresso */

switch (etapaJogo) {
    case "SF":
        switch (categoriaIngresso) {
            case 1:
                valorIngresso = 1320
                break
            case 2:
                valorIngresso = 880
                break
            case 3:
                valorIngresso = 550
                break
            case 4:
                valorIngresso = 220
                break
            default:
                valorIngresso = 0
                break
        }
        break

    case "DT":
        switch (categoriaIngresso) {
            case 1:
                valorIngresso = 660
                break
            case 2:
                valorIngresso = 440
                break
            case 3:
                valorIngresso = 330
                break
            case 4:
                valorIngresso = 170
                break
            default:
                valorIngresso = 0
                break
        }
        break
    case "FI":
        switch (categoriaIngresso) {
            case 1:
                valorIngresso = 1980
                break
            case 2:
                valorIngresso = 1320
                break
            case 3:
                valorIngresso = 880
                break
            case 4:
                valorIngresso = 330
                break
            default:
                valorIngresso = 0
                break
        }
        break
}

if (localJogo === "IN") {
    valorIngresso = valorIngresso * 4.10
} else if (localJogo === "IN") {
    localJogo = "Internacional"
} else {
    localJogo = "Nacional"
}

switch (etapaJogo) {
    case "SF":
        etapaJogo = "Semi-final"
        break
    case "DT":
        etapaJogo = "Disputa terceiro lugar"
        break
    case "FI":
        etapaJogo = "Final"
        break
}

console.log(`      ⚾    Dados da compra    ⚾`)
console.log(`Nome do cliente:  ${nomeCompleto}`)
console.log(`Tipo do jogo:  ${localJogo}`)
console.log(`Etapa do jogo:  ${etapaJogo}`)
console.log(`Categoria: ${categoriaIngresso}`)
console.log(`Quantidade de Ingressos: ${quantidadeIngresso} ingressos`)
console.log("      ⚾    Valores    ⚾")
console.log(`Valor do ingresso:  R$ ${valorIngresso}`)
console.log(`Valor total: R$ ${valorIngresso*quantidadeIngresso}`)

