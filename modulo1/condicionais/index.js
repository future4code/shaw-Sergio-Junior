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
        
        //     if(generoFilme && valorIngresso) {
        //         console.log("Bom filme")
        //             }else{console.log("Escolha outro filme:")}