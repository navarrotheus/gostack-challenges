<p align = "center">
   <a href="#conceitos-envolvidos">Conceitos</a>&nbsp;|&nbsp;
   <a href="#rotas">Rotas</a>&nbsp;|&nbsp;
   <a href="#instruções">Instruções</a>
</p>

## Conceitos envolvidos

* SoC (Separation of Concerns)
* SRP (Single Responsability Principle)
* DRY (Don't Repeat Yourself)
* DIP (Dependency Inversion Principle)
* SOLID Pattern
   * Utilizando Repositories & Services
* API construída com Express e TypeScript
* Eslint
* Prettier

## Rotas
### POST /transactions
Criar transação informando título, valor e tipo de transação (não é possível retirar valores maiores que o total)

<img alt="POST" src="https://i.ibb.co/JycQKkh/Sele-o-008.png" width="650px" />

### GET /transactions
Visualizar todas transações e o balanço atual

<img alt="GET" src="https://i.ibb.co/BzMm7Rb/Sele-o-009.png" width="650px" />

## Instruções

Para baixar as dependências:
> yarn

Rodar os testes:
> yarn test

Rodar a api:
> yarn dev:server
