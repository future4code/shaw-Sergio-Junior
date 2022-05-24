// Exercício 1  
// console.log(b) irá imprimir 10 
// b = 5 
// console.log(a, b) irá imprimir 10 e 5 respectivamente 


// Exercício 2 
//console.log(a, b, c) irá imprimir 10, 10, 10


// Exercício 3 
// let p: horasDeTrabalhoDia
// let t: recebePorDia


/*Exercício de escrita de código*/ 

/*let primeiroNome 
let idade 
console.log(typeof primeiroNome,typeof idade)*/

// Undefined, indefinido pois não temos nenhum valor atribuído para ser analisado

let primeiroNome = prompt("qual o seu nome?") 
let idade = prompt("qual sua idade?") 
console.log(typeof primeiroNome, typeof idade)

//Agora ambos são string, por virem como "texto" do usuário

console.log("Olá", primeiroNome, "você tem", idade, "anos")


/*Programa com 3 perguntas de sim ou não*/

const cafeDaManha = "Tomou café da manhã hoje?"
let resposta1 = "sim"
const almoco= "Você almoçou hoje?"
let resposta2 = "sim"
const agua= "Você bebeu água hoje?"
let resposta3 = "não"


console.log(cafeDaManha, resposta1)
console.log(almoco, resposta2)
console.log(agua, resposta3)  


/*Troque os valores de a e b*/ 

let a = 10 
let b = 25 
c = a 
a = b 
b = c 
console.log("o novo valor de a é", a, "o novo valor de b é", b)

