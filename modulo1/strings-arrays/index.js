    // EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO // 

    // let array
    // console.log('a. ', array) // Será impresso a. undefined 
    // array = null
    // console.log('b. ', array) // Será impresso b. null
    // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // console.log('c. ', array.length)  // Será impresso c. 11 
    // let i = 0
    // console.log('d. ', array[i])  // Será impresso d. 3 
    // array[i+1] = 19
    // console.log('e. ', array) // Será impresso e. 11  
    // const valor = array[i+6]
    // console.log('f. ', valor) // Será impresso f. 9


    // const frase = prompt("Digite uma frase")
    // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    // Será impresso SUBI NUM ÔNIBUS EM MIRROCOS 27 //   

    // EXERCICIOS DE ESCRITA DE CÓDIGO // 

        // EXERCICIO 1 // 


        /* Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
        Em seguida, Imprima no console a seguinte mensagem:    
        O e-mail `emailDoUsuario` foi cadastrado com sucesso. 
        Seja bem-vinda(o), `nomeDoUsuario`! */

        // let nomeDoUsuario = prompt("Digite seu nome:")
        // let emailUs = prompt("Digite seu email:") 
        // console.log(`O e-mail ${emailUs} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeDoUsuario}`)



        // EXERCICIO 2 //
    

        /*  Faça um programa que contenha um array com 5 das suas comidas preferidas, 
        armazenado em uma variável. Em seguida, siga os passos:
        a) Imprima no console o array completo       
        b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: 
        ", seguida por cada uma das comidas, **uma embaixo da outra**.
        c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
        Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista.   */ 

        // let comidasFavoritas = ["pizza", "frango grelhado", "churrasco", "sushi", "sorvete"]
        // console.log(comidasFavoritas) 
        // console.log("essas são minhas comidas favoritas:")
        // console.log(comidasFavoritas[0])
        // console.log(comidasFavoritas[1])
        // console.log(comidasFavoritas[2])
        // console.log(comidasFavoritas[3])
        // console.log(comidasFavoritas[4])

        // let suaComidaFavorita = prompt("Digite sua comida favorita:")
        // comidasFavoritas[1] = suaComidaFavorita 
        // console.log("essas são minhas comidas favoritas:")
        // console.log(comidasFavoritas[0])
        // console.log(comidasFavoritas[1])
        // console.log(comidasFavoritas[2])
        // console.log(comidasFavoritas[3])
        // console.log(comidasFavoritas[4])

         

        // EXERCICIO 3 //  


        // Faça um programa, seguindo os passos:    
        // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`    
        // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array   
        // c) Imprima o array no console 
        // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
        // e) Remova da lista o item de índice que o usuário escolheu. 
        // f) Imprima o array no console 

        // let listaDeTarefas = []
        // let tarefas = listaDeTarefas.push(prompt("Digite uma tarefa que precisar fazer essa semana:"), 
        // prompt("Digite outra tarefa:"), prompt("Digite agora mais uma tarfa:")) 
        // console.log(listaDeTarefas) 
        // let tarefaFeita = Number(prompt("Digite qual das três tarefas já realizou: 1, 2 ou 3?") -1)
        // let listaAtual = listaDeTarefas.splice(tarefaFeita, 1) 
        // console.log(listaDeTarefas)



            // DESAFIOS // 

            // 1. Receba uma frase e retorne um array onde cada elemento é uma 
            //    das palavras da frase, ignorando os espaços. 

            // array = []
            // let texto = prompt("Digite uma frase:")
            // array = texto.split(" ")
            // console.log(array)

            //  2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
            //     faça um programa que acha o índice da palavra Abacaxi e imprime tanto 
            //     o índice quanto o tamanho do array

            //    let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
            //    let indexAba = array.indexOf("Abacaxi")
            //    console.log("O índice do abacaxi é:", indexAba, "o tamanho da array é:", array.length)


            function checaAnoBissexto(ano) {
                ano = Number(prompt("Digite um ano:"))
                if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !=0)
                 {console.log(true)} 
                 else {console.log(false)}
                }
               checaAnoBissexto()