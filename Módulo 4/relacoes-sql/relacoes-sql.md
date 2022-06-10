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
*a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
SELECT Título, Movies.id, Rating.rate, Rating.comment FROM Movies 
JOIN Rating ON Movies.id = Rating.movie_id;
*b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
SELECT Movies.id, Movies.Título, MovieCast.actor_id FROM Movies 
JOIN MovieCast ON Movies.id = MovieCast.movie_id
*c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*
SELECT AVG(Rating.rate), Movies.Título  FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY Movies.Título;
## EXERCICIO 5
*a) Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*
- Pq o primeiro JOIN une somente o MovieCast a tabela Movies, o segundo JOIN vai unir os Actor a essa união de - MovieCast + Movies .
*b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*
SELECT Movies.id as movie_id, Movies.Título, MovieCast.actor_id as actor_id, Actor.name  FROM Movies
LEFT JOIN MovieCast  ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
*c) A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*
- Não estava encontrando o "m / mc / a" na lista, aí fiz a substituição, e rodou normalmente.
*d) **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*
SELECT Movies.Título as Filme, Actor.name as Ator, Rating.rate as Avaliação, Rating.comment as Comentário FROM Actor
JOIN MovieCast ON Actor.id = MovieCast.actor_id
JOIN Rating ON MovieCast.movie_id = Rating.movie_id
JOIN Movies ON Rating.movie_id = Movies.id 
