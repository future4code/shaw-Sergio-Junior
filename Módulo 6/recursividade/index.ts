// exercicio 1 (a e b)
const crescente = (n: number) => {
    if (n >= 0) {
        crescente(n - 1);
        console.log(n);
    }
};

const decrescente = (n: number) => {
    if (n >= 0) {
        console.log(n);
        decrescente(n - 1);
    }
};
// crescente(10)
// decrescente(10)

// exercicio 2 
export const somaAteX = (x: number, soma: number = 0): number => {
    if (x === 0) {
        console.log(soma)
        return soma;
    }
    return somaAteX(x - 1, soma + x);
};

// somaAteX(5)

// exercicio 3
export const somaAteXIterativa = (n: number): number => {
    var sum = 0
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum)
    return sum;
};

// somaAteXIterativa(20)

// exercicio 4
export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  // Exemplo de uso:
  const array = [10,20,30,45];
  printArray(array);