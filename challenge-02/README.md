## Instruções

Para baixar as dependências:
>yarn

Rodar os testes:
> yarn test

Rodar a api:
> yarn dev

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

### DELETE /repositories/:id/like
Decrementar like do repositório id

<img alt="DELETE Like" src="https://i.ibb.co/qNtCV2n/Selection-020.png" width="650px" />
