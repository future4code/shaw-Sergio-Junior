/* EXERCICIO 1 */

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // false
// let resultado = bool1 && bool2 // false
// console.log("a. ", resultado) 
// resultado = bool1 && bool2 && bool3 // false 
// console.log("b. ", resultado) 
// resultado = !resultado && (bool1 || bool2) // true 
// console.log("c. ", resultado)
// console.log("d. ", typeof resultado) //booleanos


/* EXERCICIO 2 */

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)   
// O prompt recebe valores em string e assim a soma não acontece, acaba concatenando.


/* EXERCICIO 3 */

/*Para o exercício anterior, sugira ao seu colega uma solução para que o 
valor impresso no console seja, de fato, a soma dos dois números.*/

//A solução será transformar string -> number 
// podemos usar as duas formas abaixo : 
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = Number(primeiroNumero) + Number(segundoNumero)
// console.log(soma)

/*ou 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) 
*/


/* EXERCICIOS CRIACAO DE CODIGO */ 

/* PRIMEIRO EXERCÍCIO 
   1. pergunte a idade 
   2. idade do melhor amigo 
   3. Sua idade é maior que idade do seu amigo?  
   4. diferença entre as duas idades */ 

//    const idade1 = Number(prompt("Qual é a sua idade?"))
//    const idade2 = Number(prompt("Qual é a idade do seu melhor amigo?"))
//    comparativoIdades = idade1 > idade2 
//    diferenca = idade1 - idade2 

//    console.log("Sua idade é:", idade1, "anos")
//    console.log("A idade do seu amigo é:", idade2, "anos")
//    console.log("Sua idade é maior que a do seu amigo?", comparativoIdades)
//    console.log("Vocês tem", diferenca, "anos de diferença")

/* SEGUNDO EXERCICIO  
   1. Insira um número par: 
   2. Resto da divisão (%) / 2 
   3. Comentário 
   4. Número ímpar + comments */ 

//    //const nPar = prompt("Insira um número PAR:")
//    /* Não haverá resto de divisão, dividindo um número par por 2 */ 
//    const nImpar = prompt("Insira um número ÍMPAR")
//    /* Com números ímpares haverá resto de divisão */ 
//    //restoDiv = nPar % 2 
//    restoDiv = nImpar % 2

//    console.log(restoDiv)


/* TERCEIRO EXERCICIO  
   1. Qual a sua idade em anos? 
   a) A idade do usuário em meses
   b) A idade do usuário em dias
   c) A idade do usuário em horas */ 

//    const suaIdade = Number(prompt("Qual a sua idade em ANOS?"))
//    idadeMeses = suaIdade * 12 
//    idadeDias  = suaIdade * 365 
//    idadeHoras = suaIdade * (365 * 24)

//    console.log("Sua idade em meses é:", idadeMeses)
//    console.log("Sua idade em dias é:", idadeDias)
//    console.log("Sua idade em horas é:", idadeHoras)


/* QUARTO EXERCICIO
   1. Pergunte dois números ao usuário 
   a) O primeiro numero é maior que segundo? 
   b) O primeiro numero é igual ao segundo? 
   c) O primeiro numero é divisível pelo segundo? 
   d) O segundo numero é divisível pelo primeiro? */ 

//    const numero1 = Number(prompt("Diga um número:")) 
//    const numero2 = Number(prompt("Diga outro número:")) 
//    pergunta1 = numero1 > numero2 
//    pergunta2 = numero1 === numero2  
//    pergunta3 = (numero1 % numero2) === 0 
//    pergunta4 = (numero2 % numero1) === 0 
   
//    console.log("primeiro número é:", numero1, "segundo número é:", numero2)
//    console.log("O primeiro numero é maior que segundo?", pergunta1)
//    console.log("O primeiro numero é igual ao segundo?", pergunta2)
//    console.log("O primeiro numero é divisível pelo segundo?", pergunta3)
//    console.log("O segundo numero é divisível pelo primeiro?", pergunta4)

   /* RESPOSTA 
                primeiro número é: 10 segundo número é: 20
   index.js:107 O primeiro numero é maior que segundo? false
   index.js:108 O primeiro numero é igual ao segundo? false
   index.js:109 O primeiro numero é divisível pelo segundo? false
   index.js:110 O segundo numero é divisível pelo primeiro? true */ 