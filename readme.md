# Fullstack App at Group

## Descrição

O projeto Fullstack App at Group é uma aplicação fullstack responsável por gerenciar usuários. O frontend foi construído com React, e o backend foi construído com Node.js, Express e Sequelize. A aplicação permite que os usuários se cadastrem, façam login, editem seus perfis e excluam suas contas.



 

<br>

# Instruções para instalação local




## Dependencias

Para instalar todas as dependencias (app/backend e app/frontend), dentro da pasta `/app`, rode o comando:

- `npm run install:all`

## Variaveis de Ambiente

- Explicação das variaveis de ambiente que podem ser configuradas no .env ou manualmente no arquivo `src/database/config/database.ts`

> Observação: se for rodar com docker, muito provavelmente a aplicação ja deve funcionar com as variaveis que estão definidas internamente no docker-compose, caso de algum conflito de portas em uso, é necessario fazer a alteração, de qualquer forma segue a explicação das variaveis que serão utilizadas no database.ts

<pre>
  <code>
import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = 
    username: process.env.DB_USER || 'root', //Usuario do MYSQL local ou Conferir docker-compose(DB_USER)
    password: process.env.DB_PASS || '123456', //Senha do MYSQL local ou Conferir docker-compose(DB_PASS)
    database: 'name_db', /Nome da Database
    host: process.env.DB_HOST || 'db', //Host da DB Local('localhost') ou Conferir docker-compose(DB_HOST) 
    port: Number(process.env.DB_PORT) || 3002, //Porta do MYSQL local ou Conferir docker-compose(DB_PORT)
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};

module.exports = config;
  </code>
</pre>



## Iniciar o banco de dados

Para que a aplicação funcione é necessario iniciar o banco de dados, então rode o comando no ambiente que estiver rodando a aplicação:

 ### Localmente 
Depois que a aplicação estiver configurada (`explicação de como configurar abaixo`) e estiver rodando, se estiver rodando localmente, basta rodar o comando na pasta raiz do projeto:

- app/backend -> `npm run db:init`

 ### Docker 
Depois que subir os container’s e a aplicação estiver rodando com o docker (`explicação de como configurar abaixo`) se estiver tudo certo, é necessário acessar o container, para isso digite:
`docker exec -it app-back-at-group sh`, e dentro do terminal do container que sera mostrado digite:


- `npm run db:init`

> Os outros comandos disponíveis também devem ser executados dentro do container, caso esteja rodando com docker.

<br>

## Para rodar com Docker

Para rodar com o docker, basta definir as variáveis de ambiente e as portas de acordo com a escolha do usuário  (já existe uma configuração generica do compose e config/database.ts, e deve funcionar), dentro do docker-compose no diretório `src/app` e digitar o comando `docker-compose up -d --build` no terminal.

-   Caso de algum conflito de portas com o mysql pare o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queira fazer uso da aplicação em containers
-   Para parar o mysql digite: `systemctl stop mysql`

-   Serão iniciados os containers: `app_backend`, `app_frontend` e `db`  

-   A partir daqui os 3 containers estarão em funcionamento, e aplicação do frontend e backend estão rodando, você pode acessar elas no seu `http://localhost:<PORTA>`.

## Para rodar Localmente

Para rodar localmente, após instalar as dependências, é necessário declarar as variáveis de ambiente no .env e acessar as pastas para rodar os comandos que startam as aplicações.

> /app/backend

 - `npm run dev`


> /app/frontend

-  `npm run dev`




<br>

# Comandos do `Backend` 


> Comando para iniciar o banco de dados e as tabelas

- `npm run db:init`

 > Comando onde a DB é dropada, reinicializada e alimentada de acordo com as migrations e seeds que estão em src/database.

- `npm run db:reset`

>  Comando para iniciar o servidor com o nodemon.

-  `npm run dev`

> Esse comando executa o teste automático de todas as camadas da aplicação.

-  `npm run test`

>  Esse comando executa o teste de cobertura da aplicação

 - `npm run test:coverage`


# Comandos do `Frontend`

>  Esse comando inicia a aplicação localmente.
 
- `npm run dev`

# Comandos do `app`

>  Esse comando mostra os logs dos conteiners que estão rodando.
 
- `npm run logs`


