
<p align = "center">
   <a href="#skills-envolvidas">Skills</a>&nbsp;|&nbsp;
   <a href="#rotas">Rotas</a>&nbsp;|&nbsp;
   <a href="#instruções">Instruções</a>
</p>

## Skills envolvidas

* NodeJs
* ExpressJs
* API REST
* Nodemon
* Métodos HTTP (GET, POST, PUT/PATCH, DELETE)
* Tipos de Parâmetros (Query Params, Route Params e Request Body)
* Middlewares

## Rotas
### POST /repositories
Criar repositório informando título, url e techs

<img alt="POST" src="https://i.ibb.co/wKbd1s0/Selection-021.png" width="650px" />

### GET /repositories
Visualizar repositórios

<img alt="GET" src="https://i.ibb.co/XD8Ftzc/Selection-016.png" width="650px" />


### PUT /repositories/:id
Alterar título, url ou techs do repositório id

<img alt="PUT" src="https://i.ibb.co/x2Mn6pt/Selection-017.png" width="650px" />

### DELETE /repositories/:id
Deletar repositório id

<img alt="DELETE" src="https://i.ibb.co/80RmBLf/Selection-018.png" width="650px" />


### POST /repositories/:id/like
Incrementar like do repositório id

<img alt="POST Like" src="https://i.ibb.co/19PMhMs/Selection-019.png" width="650px" />

### DELETE /repositories/:id/dislike
Decrementar like do repositório id

<img alt="DELETE Like" src="https://i.ibb.co/qNtCV2n/Selection-020.png" width="650px" />

## Instruções

Para baixar as dependências:
> yarn

Rodar os testes:
> yarn test

Rodar a api:
> yarn dev

Para utilizar o insomnia para teste, baixe o json [Challenge_02_Insomnia](https://github.com/navarrotheus/gostack-challenges/blob/master/challenge-02/Challenge_02_Insomnia.json) e abra com o insomnia

Nas variáveis ambiente, defina a "base_url" e "id" que será utilizado nas rotas, onde id é o id do repositório a ser manipulado
