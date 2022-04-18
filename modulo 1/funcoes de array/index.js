// // EXERCICIOS DE INTERPRETACAO DE CODIGO // //

/*
1. a)   
item 0 array completa: [nome: "Amanda Rangel", apelido: "Mandi" } ]
item 1 array completa: [nome: "Laís Petra", apelido: "Laura" }]
item 2 array completa: [nome: "Letícia Chijo", apelido: "Chijo"]

2. a) Será impresso a novaArrayB : ["Amanda Rangel","Laís Petra","Letícia Chijo"]

3. a) Será impresso a novaArrayC : [item 0 {nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}]
*/

// // EXERCICIOS DE ESCRITA DE CODIGO // // 

//  1. Dada a array:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]
// ------------------------------------------------------------------------------------ //

//  a) Crie um novo array que contenha apenas o nome dos doguinhos: apenasNomes

// const apenasNomes = pets.map((pet) => {
//     return pet.nome
// })
// console.log(apenasNomes)

// ------------------------------------------------------------------------------------ //
// //  b) Crie um novo array apenas com os cachorros salsicha: apenasSalsicha

// const apenasSalsicha = pets.filter((a) => {
//     return a.raca === "Salsicha"
// })
// console.log(apenasSalsicha)
// ------------------------------------------------------------------------------------ //

//  c) Crie um novo array que possuirá mensagens para enviar para todos os
//  clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de
//  desconto de 10% para tosar o/a [NOME]!": descontoPoodle

// let arrayDesconto = []
// const descontoPoodle = pets.filter((pet) => {
//         return pet.raca === "Poodle"
// }).map((elemento) => {
//     arrayDesconto.push((`Você ganhou um cupom de descontao de 10% para tosar o/a ${elemento.nome}`))
// })
// console.log(arrayDesconto)
// ------------------------------------------------------------------------------------ //


//  2. Dada a array:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// ------------------------------------------------------------------------------------ //
//  a) Crie um novo array que contenha apenas o nome de cada item:

// const arrayApenasNome = produtos.map((produto) => {
//     return produto.nome
// })
// console.log(arrayApenasNome)

// ------------------------------------------------------------------------------------ //
//  b) Crie um novo array que contenha um objeto com o nome e o preço 
//  de cada item, aplicando 5% de desconto em todos eles

// const precoDesconto = produtos.map((produto) => {
//     delete produto.categoria;
//     return {
//         ...produto,
//         preco: Number(produto.preco * 0.95).toFixed(2)
//     }
// })
// console.log(precoDesconto)

// ------------------------------------------------------------------------------------ //
//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const sohBebidas = produtos.filter((produto)=>{
//     return produto.categoria === "Bebidas"
// })
// console.log(sohBebidas)

// ------------------------------------------------------------------------------------ //
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const somenteYpe = produtos.filter((produto) => {
//         return produto.nome.includes("Ypê")
// })
// console.log(somenteYpe)

// ------------------------------------------------------------------------------------ //
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const fraseDeCompra = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// }).map((produto) => {
//     return `Compre ${ produto.nome } por R$${ produto.preco } `
// })
// console.log(fraseDeCompra)

// ------------------------------------------------------------------------------------ //
