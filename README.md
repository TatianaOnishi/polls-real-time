### docker-compose.yml 

image: é uma receita criada previamente, algo criado por outra pessoa/empresa que tem os comandos exatos para executar algo. 
ports: redirecionamento de porta 

volumes: sistema de storage. persistir os dados mesmo após desligar o container.  Está dizendo para salvar dentro da pasta (a primeira antes dos dois pontos) os seguintes conteúdo (depois dos dois pontos) 
``` - 'polls_redis_data:/bitnami/redis/data'```
