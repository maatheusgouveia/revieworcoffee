# Review or coffee

## Preparar container do BD

### MySQL

`docker run -it --name bd-revieworcoffee -e MYSQL_ROOT_PASSWORD=docker -e MYSQL_ROOT_HOST=% -p 3306:3306 -d mysql:latest`

## Variáveis de ambiente

Antes de prosseguir você precisará criar um arquivo `.env` e configurá-lo corretamente seguindo o exemplo do arquivo `.env.example`

## Preparando o banco de dados

Depois de criar os containers será necessário criar um banco de dados no mysql chamado "revieworcoffee" e então executar as migrations com o comando `yarn migrate`
