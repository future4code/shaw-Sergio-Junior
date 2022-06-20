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

// EXERCÍCIO 05
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

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
return string1.toLowerCase() === string2.toLowerCase() 
}

// EXERCÍCIO 13
function checaRenovacaoRG(renovacao) {
anoAtual = Number(prompt("Digite o ano atual:"))
anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
anoRG = Number(prompt("Digite ano da expedição do RG"))
idade = anoAtual - anoNascimento
vencimentoRG = anoAtual - anoRG 
renovacao = (idade <= 20 && vencimentoRG >=5) 
|| (idade <= 50 && vencimentoRG >=10) 
|| (idade > 50 && vencimentoRG >=15) 
console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 let anoBiUm = (ano % 400) === 0
 let anoBiDois = (ano % 4) === 0
 let anoBiTres = (ano % 100) != 0 
 anoBissexto = anoBiUm || anoBiDois && anoBiTres
 return anoBissexto         
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
maiorDeIdade = prompt("é maior de 18 anos?") === "sim"
ensinoMedio = prompt("possui ensino medio completo?") === "sim"
disponibilidade = prompt("possui disponibilidade de horario?") === "sim"
console.log(maiorDeIdade&&ensinoMedio&&disponibilidade)
return (maiorDeIdade && ensinoMedio && disponibilidade)
}

