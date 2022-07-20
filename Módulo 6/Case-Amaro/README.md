### DEPLOYED WITH HEROKU
https://case-amaro-shaw.herokuapp.com/

### POSTMAN
https://documenter.getpostman.com/view/20351263/UzQyr3jX


## Criação de API para cadastro e consulta de produtos

End-point para inserção de dados
O cliente poderá enviá-los em arquivos json e a API deverá inserir no banco de dados.
Banco de dado : MySql

End-point para consulta destes produtos
Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag, deverá listar todos os produtos com aquela respectiva busca, poderá ser feito em um ou mais end-points.

Testes básicos realizado. 

Cache para consulta.

Criar um arquivo .env com os seguintes dados sensíveis: 
DB_HOST = 
DB_USER = 
DB_PASS = 
DB_SCHEMA = 
DB_PORT = 
JWT_KEY = 
ACCESS_TOKEN_EXPIRES_IN = 

Rodar //npm i// para instalar as libs antes de rodar o projeto.   