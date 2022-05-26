//-- Exercicio #4 

//a) ok 

//b) utilizando o comando tsc ao rodar o arquivo e com o tsconfig configurado. 
//b) no meu caso ele está em uma pasta src então tenho o tsconfig configurado para este caso ./src no root  
//c) tsc arquivo1.ts arquivo2.ts arquivo3.ts  dessa forma consegui, porem criou novos arquivos no src

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}