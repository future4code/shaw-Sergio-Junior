//-- EXERCICIOS --//

//-- 1
// a)  Qual a sua opinião em relação a usar strings para representar os ids ?
//     Você concorda que seja melhor do que usar números ?
// Acredito que utilizando strings, o id se torna mais seguro e mais difícil ser
// duplicado.


// b)  A partir de hoje vamos tentar isolar, ao máximo,
//     as nossas lógicas dentro de funções.Isso vai deixar nosso código
//     mais organizado e aumentar a facilidade da manutenção e refatoração.
//     Dado isso, crie uma função para gerar um id.
// Função criada no GenerateId.ts na pasta services


//-- 2
// a) Explique o código acima com as suas palavras.
// Criação de varíavel com o nome da tabela, depois criação da connection com Knex.
// Por último criando a função para adicionar user na tabela

// b) Comece criando a tabela de usuários.
//    Coloque a query que você utilizou no arquivo de respostas.

// CREATE TABLE user_auth (
// id VARCHAR(255) PRIMARY KEY,
// email VARCHAR(255) UNIQUE NOT NULL,
// password VARCHAR(255) NOT NULL
// );

// c) Pela mesma justificativa do exercício anterior,
//    crie uma função para ser responsável pela criação de usuários no banco.
// - Criada na pasta data, em UserDatabase!

//-- 3
// a) O que a linha `as string` faz? Por que precisamos usar ela ali?
// Garante que o que estamos recebendo é uma string. Precisamos pois só é aceito string ali!

// b) Agora, crie a função que gere o token.
// Além disso, crie um type  para representar o input dessa função.
// Criados nas pastas: src(types.ts) e services(Authenticator.ts)

//-- 4
// Feito no código.

//-- 5
// Feito no código.

//-- 6
// Feito no código.

//-- 7
// a) O que a linha as any faz? Por que precisamos usá-la ali?
//  Retorna o payload como tipo any, assim podemos acessar na nossa variável result como um objeto.
//  Mas eu prefiro já retornar tipado com AuthenticatorData.

//-- 8
// Feito no código.