import { app } from "./app";
import { AddressInfo } from "net";
import { User, Customer } from "./classes"
import { Client, Industry, Commerce, Residence, ResidentialClient, CommercialClient, IndustrialClient } from "./classesPolimorfismo";


// -- INSTANCIAS --// 
// const userTest = new User("01a", "maria@gmail.com", "Maria", "123456")
// const customerTest = new Customer("02a", "joao@gmail.com", "João", "123456", "0000 0000 0003 0005")

// EXERCICIO # 1
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// - Não seria possível, pois o dado é private e não temos um getter para o password! 
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// - Somente uma vez 

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 2 
// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// - Somente uma vez
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// - Duas vezes, tenho a criação de uma instancia de User e criação de uma instancia de Customer. 
//  Ambos chamam o console.log("Chamando o construtor da classe User") por ser a classe "PAI"

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 3 
// -- IMPRESSOES -- //
// console.log("NAME:" ,customerTest.getName())
// console.log("ID:", customerTest.getId())
// console.log("E-MAIL:", customerTest.getEmail())
// console.log("CREDIT CARD:", customerTest.getCreditCard())
// console.log("TOTAL PURCHASE:", customerTest.purchaseTotal)

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// - Somente se elaborassemos um método getPassword, aí sim seria possível. 

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 4 & # 5  
//-- Chamando o método adicionado "introduceYourself" a classe PAI (User).
// console.log(customerTest.introduceYourself(customerTest.getName()))

// ----------------------------------------------------------------------------------------------

//-- # POLIMORFISMO # --//  


// EXERCICIO # 1
//-- CRIANDO UM OBJETO COM A INTERFACE PASSADA 
const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

// a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*
// - Todas as propriedades impressas, log da feita separa pois se trata de um método. 
// console.log(client)
// console.log("calculateBill:", client.calculateBill())

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 2
// a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// const placeTest = new Place("95670000")
// Error = "Cannot create an instance of an abstract class."
// b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
// -  Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 3
const newResidence = new Residence(4, "95670-000")
const newCommerce = new Commerce(3, "95680-000")
const newIndustry = new Industry(15, "95600-000")
// Crie os getters de cada uma das propriedades protegidas dessas três classes.
// console.log("Residence CEP:", newResidence.getCep(),"Residents:", newResidence.getResidentsQuantity())
// console.log("Commerce CEP:", newCommerce.getCep(), "Floors:", newCommerce.getFloorsQuantity())
// console.log("Industry CEP:", newIndustry.getCep(),"Machines:", newIndustry.getMachinesQuantity())

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 4
// a) Que métodos e propriedades essa classe possui? Por quê?
// - O método do implemento (CLIENT) que é o calculateBill e getCep. Por heranca dos pais e interface. 
const newResidenceClient = new ResidentialClient("John", 6, 150, "02254669874", 4, "95670-000")
// console.log("R$", newResidenceClient.calculateBill())

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 5
// a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*
// - Propriedades/métodos herdados de CLIENT e PLACE(através do pai)
// b) *Quais as diferenças dessa classe com a `ResidentialClient`?*
// - O floor quantity e residents quantity, além da variavel para calculo, CEP e CNPJ. 
const newCommercialClient = new CommercialClient("25413655-0001/56", "Magazine", 25, 2500, 4, "95680-000")
// console.log("R$", newCommercialClient.calculateBill())
// console.log(newCommercialClient)

// ----------------------------------------------------------------------------------------------

// EXERCICIO # 6
const newIndustrialClient = new IndustrialClient(879, "Nintendo", 101, 87560, 125, "0023547789-32")
// console.log(newIndustrialClient.calculateBill())
// console.log(newIndustrialClient.getIndustrialRegister())
// a) *De* qual classe a `IndustrialClient` deve ser filha? Por quê?*
// - Industry
// b) *Que interface a `IndustrialClient` implementa? Por quê?*
// - Client, pois é nossa interface de implementação com os dados publicos.  
// c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
// - Não há utilização de setters para este caso, pois o número industrial não seria lógico trocarmos.

// ----------------------------------------------------------------------------------------------

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});