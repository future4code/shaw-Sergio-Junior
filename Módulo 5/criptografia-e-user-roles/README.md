### EXERCICIO 1
a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
- Round equivalem ao COST do bcrypt; Salt é toda a string criada aleatoriamente, que contem algumas infos como numero de rounds, por exemplo. Utilizei 12 costs como valor para o round por nos ter sido passado como recomendado. 


### EXERCICIO 2
a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
- Primeiro o cadastro, aí nossos usuários já serão cadastrados com senhas criptografadas. 
d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
- Só precisei adicionar o role na resposta deste endpoint. Como ele busca através do token, somente essa atualização foi necessária 

### EXERCICIO 3
No código;  

### EXERCICIO 4
No código;  

