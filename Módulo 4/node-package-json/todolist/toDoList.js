let toDoList = ["comprar leite",
    "comprar frutas",
    "comprar pão"]

const addToList = [...toDoList, process.argv[2], process.argv[3], process.argv[4]]

console.table(addToList) 
console.log("Tarefa adicionada com sucesso!!!")