// EXERCÍCIOS DE INTERPRETAÇÃO // 
// 1.
//     a) vai imprimir 5 x 2 = 10  
//        vai imprimir 5 x 10 = 50 
//     b) não apareceria nada no console 

// 2. 
//     let textoDoUsuario = prompt("insira um texto");

//         const outraFuncao = function(texto) {
//             return texto.toLowerCase().includes("cenoura")
//         }

//         const resposta = outraFuncao(textoDoUsuario)
//             console.log(resposta); 


        // a) Essa função irá deixar todas as letras minusculas e também acrescentar a palavra cenoura 
        // b) i - true
        //    ii - true
        //    iii - true    /* para incluir algo usamos .push() e não .includes() - anotação pessoal) */ 


// EXERCÍCIOS DE ESCRITA DE CÓDIGO // 

    // 1.
//         function infos() {
//             const sobreMim = "Eu sou Sérgio, tenho 26 anos, moro em Gramado e sou estudante."
//             console.log(sobreMim)  
//         }
//             infos()


//         function infosUser(n1,n2,n3,n4) {
//             const userInfos = console.log(`Eu sou ${n1}, tenho ${n2} anos, moro em ${n3} e sou ${n4}.`)
//         }
//             let nameUser = prompt("Qual é o seu nome?")
//                 let ageUser = (prompt("Qual é a sua idade?").toString())
//                     let cityUser = prompt("Qual é a sua cidade?")
//                         let jobUser = prompt("Qual é a sua profissão?") 
//                             infosUser(nameUser,ageUser,cityUser,jobUser)
        
  
    // 2.
    
    // a) Escreva uma função que receba 2 números como parâmetros, e, 
    // dentro da função, faça a soma das duas entradas e retorne o resultado. 
    // Invoque a função e imprima no console o resultado.

        // function doisNumeros(num1,num2){
        // let soma = num1 + num2 
        // return soma
        // } 
        //      let numeroUm = Number(prompt("digite um número:"));
        //          let numeroDois = Number(prompt("digite outro número:")) ; 
        //              let mostraTela = doisNumeros(numeroUm, numeroDois)
        //                  console.log(mostraTela)

    
    // b) Faça uma função que recebe 2 números e retorne um booleano que 
    // // informa se o primeiro número é **maior ou igual** ao segundo.
    
    //         function doisNumeros(n1,n2){
    //         let trueOrFalse = n1 >= n2 
    //         return trueOrFalse
    //         } 
    //             let n1 = Number(prompt("digite um numero"))
    //                 let n2 = Number(prompt("digite um numero"))
    //                     console.log(doisNumeros(n1,n2))


    // // c) Escreva uma função que receba um número e devolva um 
    // // booleano indicando se ele é par ou não
    
    //         function doisNumeros(n1){
    //         let trueOrFalse = n1 % 2===0 
    //         return trueOrFalse
    //         } 

    //             let numero1 = Number(prompt("digite um numero"))
    //                 console.log(doisNumeros(numero1))



    // // d) Faça uma função que recebe uma mensagem (`string`) 
    // // como parâmetro e imprima o tamanho dessa mensagem, juntamente 
    // // com uma versão dela em letras maiúsculas.

           
                  
    //         let funcao2_D = (string) => {
    //             maiuscula = string.toUpperCase() 
    //             tamanho = string.length 
    //             console.log(`O tamanho da frase é ${tamanho} e ela em maiúscula fica ${maiuscula}`)   
    //         }    
    //                 let perguntaPrompt =  prompt("Digite uma frase:")
    //                     funcao2_D(perguntaPrompt)
         



    //     // 3.

    //         // Crie uma função para cada uma das operações básicas 
    //         // (soma, subtração, multiplicação e divisão). 
    //         // Em seguida, peça para o usuário inserir dois números e chame 
    //         // essas 4 funções com esses valores inputados pelo usuário sendo o 
    //         // argumento. Por fim, mostre no console o resultado das operações:
 
    //         // Números inseridos: 30 e 3
    //         // Soma: 33
    //         // Diferença: 27
    //         // Multiplicação: 90
    //         // Divisão: 10


    //         function somar(n1,n2){
    //         let soma = n1 + n2 
    //         return soma  
    //         } 
    //             let userSoma = Number(prompt("digite um número:"))
    //                 let userSomaDois = Number(prompt("digite outro número:"))
    //                     console.log(somar(userSoma,userSomaDois))

    //         function subtrair(n1,n2){
    //         let subtracao = n1 - n2 
    //         return subtracao  
    //         }
    //             let userMenos = Number(prompt("digite um número:"))
    //                 let userMenosDois = Number(prompt("digite outro número:"))
    //                     console.log(subtrair(userMenos,userMenosDois))


    //         function multiplicar(n1,n2){
    //         let multiplicacao = n1 * n2 
    //         return multiplicacao  
    //         }
    //             let userMult = Number(prompt("digite um número:"))
    //                 let userMultDois = Number(prompt("digite outro número:"))
    //                     console.log(multiplicar(userMult,userMultDois))


    //         function dividir(n1,n2){
    //         let divisao = n1 / n2 
    //         return divisao  
    //         }  
    //             let userDiv = Number(prompt("digite um número:"))
    //                 let userDivDois = Number(prompt("digite outro número:"))
    //                     console.log(dividir(userDiv,userDivDois))
