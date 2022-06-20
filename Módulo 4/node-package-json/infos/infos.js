//-- Exercício #1 

// a) 
// Utilizamos o process.argv[]

// b) 
// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos`)

// c)
const nome = process.argv[2]
const idade = Number(process.argv[3])

nome && idade ?
    console.log("\033[34m", `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
    :
    console.log("\033[31m", `É necessário inserir os dois parâmetros`)


