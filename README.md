# apiFinanceira

API de Gerenciamento Financeiro em NodeJS com testes em Jest

# To Run this Project:

- Run server:

> npm start

- Run tests from server:

> npm test


## Dependências

- ESLint

  - npm i --save-dev eslint
  - npm i -D eslint

  - ./node_modules/.bin/eslint --init
  - npm install --legacy-peer-deps

  - ./node_modules/.bin/eslint src/** test/** --fix
  
    - Scripts:
      - "lint": "eslint --fix --ext .js,.jsx ."
      - "lint": "eslint src/** test/** --fix"

- Jest

  - npm i -D jest
  - ./node_modules/.bin/jest
  - npm i -D supertest
  - npm run secure-mode

- Express

  - npm i -S express 
  - npm i -S body-parser
  - npm i -S consign 

- Banco de Dados
  - npm i -S knex
  - npm i -S pg 
  - npm i -S knex-logger

### DB

- Migrations

  - node_modules/.bin/knex migrate:make create_users --env test
  - node_modules/.bin/knex migrate:latest --env test
