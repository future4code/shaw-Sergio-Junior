``` JS 
function contaOcorrencias(arrayDeNumeros, numerosEscolhido) {
    let inclui = 0
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numerosEscolhido) {
            inclui = inclui + 1
        }
    }
    if (inclui > 0) {
        return `O número ${numerosEscolhido} aparece ${inclui}x`
    } else {
        return `Número não encontrado`
    }
}
```