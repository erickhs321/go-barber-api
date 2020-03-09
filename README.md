## GoBarber API
Api do GoBarber, um sistema de agendamento de cortes de cabelo
## Requisitos:
- mongo db
- node js
- postgres
- redis
- sequelize cli(para rodar as migrations)
- criar um arquivo .env com as variáveis de ambiente seguindo o exemplo do .env.example

## Como instalar:
`npm i` ou `yarn` para instalar depêndencias

## Como rodar:
- `sequelize db:migrate` para rodar as migrations e fazer a criação das tabelas
- `npm dev` ou `yarn dev` para iniciar o servidor
- `npm queue` ou `yarn queue` para iniciar a fila
