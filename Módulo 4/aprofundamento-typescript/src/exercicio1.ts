//-- Exercicio #1 

//a) 
let minhaString: string = "a"
// minhaString = 8 
// Type 'number' is not assignable to type 'string'. Error 

//b) 
let meuNumero: number = 8
// meuNumero = "oito" 
// Type 'string' is not assignable to type 'number'. Error
let meuNumeroDois: number | string = "oito"
meuNumeroDois = 8

//c)
type Person = { nome: string, idade: number, corFavorita: "violeta" | "anil" | "azul" | "verde" | "amarelo" | "laranja" | "vermelho" }
enum Cores {
    violeta = "violeta",
    anil = "anil",
    azul = "azul",
    verde = "verde",
    amarelo = "amarelo",
    laranja = "laranja",
    vermelho = "vermelho"
}

let person1: Person = {
    nome: "Joao",
    idade: 21,
    corFavorita: Cores.amarelo
}

let person2: Person = {
    nome: "Joaozinho",
    idade: 23,
    corFavorita: Cores.anil
}

let person3: Person = {
    nome: "Joao Segundo",
    idade: 105,
    corFavorita: Cores.verde
} 

console.table(person3)