``` JavaScript  
function calculaPrecoTotal(quantidade) {
  let valorMaca = 0
  if (quantidade < 12) {
    valorMaca = 1.30 
  } else {
    valorMaca = 1.00
  }

  const custoTotal = quantidade * valorMaca
  
  return custoTotal
}
```