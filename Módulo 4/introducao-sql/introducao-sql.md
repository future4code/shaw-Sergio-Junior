# EX 1  
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES; 

SHOW TABLES;

DESCRIBE Actor;
# A) 
VARCHAR para declarar strings até 255characters / Primary key - obrigatório (nosso id - literalmente)
Not null - tornar infor obrigatória / Floa - explicado no enunciado / Date - formato de data  yyyy/mm/dd 
# B)
SHOW DATABASES - Retornou todas as minhas databases;
SHOW TABLES - retornou todas as minhas tabelas;   
# C)
DESCRIBE Actor - Descrição da minha tabela (campos / tipos / null ou não null / key / valor inicial / extra info)

# EX 2 
INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES (
"001", 
"Tony Ramos",
400000, 
"1948-08-25",
"male"
), 
(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES (
"002",
"Glória Perez",
100000,
"1963-10-23",
"female"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)  
VALUES
(
'003',
'Andreia Nude',
150000,
'1950-06-25',
'female'
), 
(
'004',
'Andre Null',
100500,
'1955-05-03',
'male'
);

# B) 
Error Code: 1062. Dupplicate entry '002' for key 'PRIMARY' - Basicamente retorna falando que já possuímos uma 
key '002' como 'PRIMARY KEY', não podemos duplicar. 

# C)
Error Code: 1136. Column count doesn't match value count at row 1. 
Numéro de colunas não condiz com o passado no "default" nosso lá na primeira linha. 
# D)
Error Code: 1364. Fiel 'name' doesn't have a default value.
Name não tem valor pré-definido e não pode ser null, então não podemos deixar de passá-lo.
# E)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. 
O que passamos acabou fazendo uma operação matemática, temos que passar em type DATE para ser válido 
'yyyy/mm/dd'

# EX 3  
# A)
SELECT * FROM Actor WHERE gender = 'female'3;

# B)
SELECT salary FROM Actor WHERE name = "TONY RAMOS";

# C)
SELECT * FROM Actor WHERE gender = 'invalid';

Retornou 0 rows, pois não tenho nenhum ator/atriz com o genero = "invalid"

# D)
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

# E)
SELECT id, nome FROM Actor WHERE id = "002"; (errada)
SELECT id, name FROM Actor WHERE id = "002"; (correta)
Nome está errado, nos nossos campos temos somente //name// por isso ocorreu o erro.

# EX 4  
# A) 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000; 

Todas as colunas dos atores que começam com (A ou J) e têm salário maior que 300k.  
# B)
SELECT * FROM Actor WHERE name LIKE 'A%' AND salary > 350000;

# C)
SELECT * FROM Actor WHERE name LIKE '%g%';

# D)
SELECT * FROM Actor WHERE (name LIKE '%a%' OR name LIKE '%g%') AND 
salary BETWEEN 350000  AND 900000; 

# EX 5
# A)
Type text, tipo texto, maior que VARCHAR, com até 65535 characters.  

CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
Título VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
Avaliação INT NOT NULL
);

INSERT INTO Movies (id, Título, Sinopse, release_date, Avaliação)
VALUES
(
'001',
'Se Eu Fosse Você',
'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
'2006-01-06',
7
),
(
'002',
'Doce de mãe',
'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
 empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais
 morar com ela',
'2012-12-27',
10
),
(
'003',
'Dona Flor e Seus Dois Maridos',
'Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.',
'2017-11-02',
8
),
(
'004',
'TOP GUN - ASES INDOMÁVEIS',
'Em Top Gun - Ases Indomáveis, Pete Mitchell (Tom Cruise),
 um jovem piloto, ingressa na Academia Aérea para se tornar piloto de caça.
 Lá, ele se envolve com Charlotte Blackwood (Kelly McGillis), uma bela mulher,
 e enfrenta um competidor à sua altura (Val Kilmer).',
'1986-07-10',
9
);

# EX 6  
SELECT id, Título, Avaliação FROM Movies WHERE id = '003';

SELECT * FROM Movies WHERE título = 'TOP GUN - ASES INDOMÁVEIS';

SELECT id, título, sinopse FROM Movies WHERE Avaliação >= 7;

# EX 7  
SELECT * FROM Movies WHERE título LIKE '%vida%';

SELECT * FROM Movies WHERE título LIKE '%caça%' OR sinopse LIKE '%caça%';

SELECT * FROM Movies WHERE release_date <= '2022-06-06';

SELECT * FROM Movies WHERE release_date <= '2022-06-06' AND 
(título LIKE '%top%' OR sinopse LIKE '%TOP%') AND Avaliação > 7;  
