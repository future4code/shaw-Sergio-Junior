// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO // 

// // // 1. 
// a) Será impresso: 
    /* 
    Matheus Nachtergaele 
    Virginia Cavendish 
    Canal: "Globo", horario: "14h"
    */

// // // 2. 
// a) Será impresso: 
    /*
    nome: "Juca", idade: 3, raca: "SRD" 
    nome: "Juba", idade: 3, raca: "SRD"
    nome: "Jubo", idade: 3, raca: "SRD"
    */
// b) A sintaxe do reticências: Spread, copia todos os itens daquele objeto. 

// // // 3. 
// a) Será impresso: 
    /*
    backender: false
    undefined
    */
// b) Undefined pois não foi atribuído um valor para altura. 

// EXERCICIOS DE ESCRITA DE CÓDIGO // 

// // // 1. 

// a: 
    let pessoa = {
        nome: 'Joao',
        apelidos: ['Joaozinho','Magnata','Boca']
    }
    function nomeApelido (parametro) {
        console.log(`Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}.`)
    }
        nomeApelido(pessoa)

// b: 
    let apelidosDois = {
        ...pessoa, 
        apelidos: ["Mariazinha", 'Jaboti', "Maya"]
    }
        nomeApelido(apelidosDois)

// // // 2. 

// a: 
    let pessoaUm = {
        nome: 'João' , 
        idade: 26 , 
        profissao: 'Estudante' 
    }  
        let pessoaDois = {
            nome: "Maria" ,
            idade: 30 ,
            profissao: 'Empresária'
        } 

// b: 
    function recebeObjetos(parametro) {
        let tamanho = parametro.nome.length
        let tamanhoProfissao = parametro.profissao.length
        let arrayDaFuncao = [parametro.nome, tamanho, parametro.idade, parametro.profissao, tamanhoProfissao]
        return arrayDaFuncao      
    }
        console.log(recebeObjetos(pessoaUm))

// // // 3. 

// a: 
    let carrinho = []
// b: 
    let frutaUm = {
        nome: 'Maçã', 
        disponibilidade: true
    }
        let frutaDois = {
            nome: 'Abacaxi', 
            disponibilidade: true
        }
            let frutaTres = {
                nome: 'Morango', 
                disponibilidade: true
            }
// c: 
    function sacolao (a1,a2,a3) {
        carrinho.push(a1)
        carrinho.push(a2)
        carrinho.push(a3)
        return carrinho
    }
    
    console.log(sacolao(frutaUm,frutaDois,frutaTres))
    