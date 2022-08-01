### DEPLOY NO HEROKU 
https://wirecard-shaw.herokuapp.com/

### DOCUMENTAÇÃO NO POSTMAN
https://documenter.getpostman.com/view/20351263/UzXNVxdb

## Criação de API para inserção de dados e consulta de status de pagamento

Quatro endpoints para inserção de dados 
a) InsertProductOwner - Inserir productOwner
b) InsertBuyer - Inserir buyer (necessário fornecer dados pelo body)
c) InsertBuyerCard - Inserir buyerCard (necessário fornecer dados pelo body)
d) InsertPayment - Inserir payment (necessário fornecer dados pelo body)

Um endpoint para consulta de status de pagamento 
e) GetPaymentStatus - Consultar paymentStatus através de seu id (fornecer id por path params)

Testes unitários realizados. 

OBS.1: Inserir no arquivo .env os seguintes dados sensíveis: 
DB_HOST = 
DB_USER = 
DB_PASS = 
DB_SCHEMA = 
DB_PORT = 

OBS.2: Rodar /--- npm i ---/ para instalar as libs antes de rodar o projeto. 