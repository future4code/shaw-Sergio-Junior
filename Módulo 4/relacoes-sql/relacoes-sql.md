## EXERCICIO 1
*a) Explique o que é uma chave estrangeira*
FOREIGN KEY - é uma chave usada para relacionarmos algo de uma tabela com uma tabela "estrangeria"
*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
INSERT INTO Rating VALUES(
"a",
"Filme ruim",
5.3,
'001'
),
(
"d",
"Filme médio",
7,
'006'
),
(
"c",
"Filme bom",
7.5,
'004'
),
(
"b",
"Filme excelente",
8.3,
'003'
);
*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
- Falha na foreign key, ou seja, foi passado uma foreign key inválida. 
*d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
- ALTER TABLE Movies DROP rating;
*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
- Não pode deletar um linha a qual ta sendo relacionada em outra tabela. Primeiro deletar da tabela relacionando. 

## EXERCICIO 2
*a) Explique, com as suas palavras, essa tabela*
- Tabela possui um id para o filme, relacionando a tabela Movies através da foreing key 
- Tabela possui um id para o ator , relacionando a tabela Actor através da foreign key
*b) Crie, ao menos, 6 relações nessa tabela* 
INSERT INTO MovieCast VALUES (
'001',
'006'
),
(
'004',
'25'
),
(
'006',
'001'
);

INSERT INTO MovieCast VALUES 
(
'006',
'006'
),
(
'004',
'003'
),
(
'001',
'006'
);
*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
- Erro de constraint, não consegue localizar o movie id ou actor id e aí não pode adicionar ou modificar
*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
- Não pode deletar um actor que tem id relacionado em outra tabela. 
## EXERCICIO 3
*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*
- Ele funciona mais ou menos com um WHERE, junte tabela /A/ "where/ON"  /CONDIÇÃO/.  
*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
SELECT Título, Movies.id, Rating.rate as nota FROM Movies
JOIN Rating ON Movies.id = Rating.movie_id;

## EXERCICIO 4
## EXERCICIO 5