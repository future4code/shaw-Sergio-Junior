import { app } from "./app";
import { AddressInfo } from "net";
import { UserAccount, Transaction } from "./classes"


// EXERCICIO 1 : 
// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// Serve para construirmos nosso objeto, nesse caso, chamamos da seguinte forma: Key word NEW  
// const userAccount1 = new UserAccount ("02235845066", "João", 25)

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
const userAccount1 = new UserAccount("02235845066", "João", 25)
// Chamando o construtor da classe User - foi impresso uma vez no terminal. 

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
// Para somente ter acesso utilizamos os getters, para fazermos modificações método setters. (ambos public)


// EXERCICIO 2 : 
const transaction1 = new Transaction("McDonalds", 32, "10/06/2022")

// const transactionsDate = transaction1.getDate()
// console.log(transactionsDate)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});