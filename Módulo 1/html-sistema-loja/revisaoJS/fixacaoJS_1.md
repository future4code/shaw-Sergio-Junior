 
 ``` javascript
 function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFixo = 2000
  let valorComissao = (100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05)
  const salarioFinal = salarioFixo + valorComissao 
  
  return salarioFinal
}
```