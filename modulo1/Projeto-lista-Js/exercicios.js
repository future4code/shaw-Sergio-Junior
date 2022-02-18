// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(haltura,base) {
  haltura = Number(prompt("digite a altura do retangulo:")) 
  base = Number(prompt("digite a largura da base do retangulo:")) 
  areaRetangulo = base*haltura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  anoAtual = Number(prompt("digite o ano atual:")) 
  anoNascimento = Number(prompt("digite seu ano de nascimento:")) 
  idade = anoAtual-anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso/(altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  nome = (prompt("digite seu nome:")) 
  idade = (prompt("digite sua idade:")) 
  email = (prompt("digite seu email:")) 
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  cor1 = (prompt("digite uma cor favorita:")) 
  cor2 = (prompt("digite outra cor favorita:")) 
  cor3 = (prompt("digite mais uma cor favorita:")) 
  mostraArray = [cor1, cor2, cor3]
  console.log(mostraArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 string = string.toUpperCase()
 return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
numeroIngressos = (custo/valorIngresso)
return numeroIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
string1 = string1.length
string2 = string2.length
comparativo = string1 === string2
return comparativo
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array){
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
let comprimento = array.length 
let ultimo = array[comprimento-1]
return ultimo
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
comprimento = array.length
ultimo = array[comprimento-1]
primeiro = array[0]
array[comprimento-1] = primeiro 
array[0] = ultimo
return array
}

let array = [1,2,3,4,5,6]
console.log(trocaPrimeiroEUltimo(array))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
return string1.toLowerCase() === string2.toLowerCase() 
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}