# apiFinanceira

API de Gerenciamento Financeiro em NodeJS com testes em Jest


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

- Express

  - npm i -S express 
