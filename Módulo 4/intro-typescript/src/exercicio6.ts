function imprime(n1: number, n2: number): void {
    const soma: number = n1 + n2
    const subtracao: number = n1 - n2
    const divisao: number = n1 / n2
    const multiplicacao: number = n1 * n2

    console.log(`A soma é ${soma}. A subtração é ${subtracao}. A divisão é ${divisao}. A multiplicação é ${multiplicacao}`) 
}

imprime(10,20)