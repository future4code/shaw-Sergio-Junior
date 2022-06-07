# EX 1
/A/  ALTER TABLE Actor DROP COLUMN salary;
 - Droparia a coluna de salário da table Actor 
/B/ ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
 - Iria alterar a coluna gender para sex 'VARCHAR(6)' se mantém igual  
/C/ ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
 - Iria alterar o limite de caracteres de 6 para 255 da coluna 'gender' 
/D/ 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
DESCRIBE Actor;

# EX 2
/A/
- UPDATE Actor SET name = "Joaquim Barbosa", birth_date = "1932/03/29" WHERE id = "003";
/B/
- UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
- UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
/C/
- UPDATE Actor SET name = "Robert Da Tiro", birth_date = "1920-02-21", gender = "male", id = "006", salary = 1200 WHERE id = "005";
/D/
- UPDATE Actor SET name = "Juliana Paes" WHERE id = 10000000;
- Aceitou, porém não atualizou nínguem, visto que não possuo nínguem no id passado. 

# EX 3
/A/ 
- DELETE FROM Actor WHERE name = "Fernanda Montenegro";
/B/ 
- DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

# EX 4
/A/
- SELECT MAX(salary) FROM Actor;
/B/
- SELECT MIN(salary) FROM Actor WHERE gender = "female";
/C/
- SELECT COUNT(*) FROM Actor WHERE gender = "female"; 
/D/
- SELECT SUM(salary) FROM Actor; 

# EX 5
/A/
- Irá retornar o número de elementos por genero. Ex: male 2 | female 4 
/B/
- SELECT id, name FROM Actor ORDER BY name DESC;
/C/
- SELECT * FROM Actor ORDER BY salary; 
/D/
- SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
/E/
- SELECT AVG(salary), gender FROM Actor GROUP BY gender;

# EX 6
/A/
- ALTER TABLE Movies ADD playing_limit_date DATE;
/B/
- ALTER TABLE Movies CHANGE Avaliação rating FLOAT NOT NULL; 
/C/
- UPDATE Movies SET playing_limit_date = '2022/06/02' WHERE id = '004';
- UPDATE Movies SET playing_limit_date = '2022/08/01' WHERE id = '001';
/D/
- DELETE FROM Movies WHERE id = '002';
- UPDATE Movies SET sinopse = "lalalalalalalallalalalalalla" WHERE id = '002';
- Aceitou a alteração da sinopse, porém não possuo mais o elemento de id = '002'. Mas 
- para o banco de dados ele ainda "existe". 

# EX 7
DESAFIO

# EX 8
DESAFIO