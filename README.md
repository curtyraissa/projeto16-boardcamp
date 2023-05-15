
<h1 align="center">Boardcamp - Node / SQL</h1>

✅ Requisitos
- Geral
    - [x]  A porta utilizada pelo seu servidor deve ser a **5000**.
    - [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub **apenas com o código do back-end.**
    - [x]  Faça commits a cada funcionalidade implementada.
    - [x]  **Utilize dotenv.**
    - [x]  Não esqueça de criar o `.gitignore`: a `node_modules` e o `.env` não devem ser commitados.
    - [x]  Seu projeto deve ter, obrigatoriamente, os arquivos `package.json` e `package-lock.json`, que devem estar na raiz do projeto. Eles devem conter todas as **dependências** do projeto.
    - [x]  Adicione o código que inicia o servidor, com a função `listen`, no arquivo `src/app.js`.
    - [x]  Adicione um script no `package.json` para iniciar o servidor rodando `npm start` como no exemplo abaixo:
        
        ```json
        // package.json
        {
          //...
          "scripts": {
            //...
            "start": "node ./src/app.js"
          }
        }
        ```
        
    - [x]  A estrutura de arquivos e pastas do projeto deve seguir o padrão aprendido nas últimas semanas, com as camadas `controllers`, `routers`, `middlewares` e `schemas` (onde for necessário).
- CRUD de Jogos [Create | Read]
    - Formato de um jogo (tabela `games`)
        
        ```jsx
        {
          id: 1,
          name: 'Banco Imobiliário',
          image: 'http://',
          stockTotal: 3,
          pricePerDay: 1500,
        }
        ```
        
    - Listar jogos
        - **Rota**: **GET** `/games`
        - **Response:** lista dos jogos encontrados, seguindo o formato abaixo.
            
            ```jsx
            [
              {
                id: 1,
                name: 'Banco Imobiliário',
                image: 'http://',
                stockTotal: 3,
                pricePerDay: 1500
              },
              {
                id: 2,
                name: 'Detetive',
                image: 'http://',
                stockTotal: 1,
                pricePerDay: 2500
              },
            ]
            ```
            
    - Inserir um jogo
        - **Rota**: **POST** `/games`
        - **Request**: body no formato:
            
            ```jsx
            {
              name: 'Banco Imobiliário',
              image: 'http://www.imagem.com.br/banco_imobiliario.jpg',
              stockTotal: 3,
              pricePerDay: 1500
            }
            ```
            
        - **Response:** status 201, sem dados
        - **Regras de Negócio:**
            - `name` deve estar presente e não pode estar vazio; `stockTotal` e `pricePerDay` devem ser maiores que 0 ⇒ nesses casos, deve retornar **status 400.**
            - `name` não pode ser um nome de jogo já existente ⇒ nesse caso deve retornar **status 409.**
- CRUD de Clientes [Create | Read | Update]
    - Formato de um cliente (tabela `customers`)
        
        ```jsx
        {
          id: 1,
          name: 'João Alfredo',
          phone: '21998899222',
          cpf: '01234567890',
          birthday: '1992-10-25'
        }
        ```
        
    - Listar clientes
        - **Rota: GET** `/customers`
        - **Response:** lista com todos os clientes
            
            ```jsx
            [
              {
                id: 1,
                name: 'João Alfredo',
                phone: '21998899222',
                cpf: '01234567890',
                birthday: '1992-10-05'
              },
              {
                id: 2,
                name: 'Maria Alfreda',
                phone: '21998899221',
                cpf: '12345678910',
                birthday: '1994-12-25'
              },
            ]
            ```
            
    - Buscar um cliente por id
        - **Rota: GET** `/customers/:id`
        - **Response:** somente o objeto do usuário com o id passado:
            
            ```sql
            {
              id: 1,
              name: 'João Alfredo',
              phone: '21998899222',
              cpf: '01234567890',
              birthday: '1992-10-05'
            }
            ```
            
        - **Regras de Negócio:**
            - Se o cliente com id dado não existir, deve responder com **status 404.**
    - Inserir um cliente
        - **Rota:** **POST** `/customers`
        - **Request:** body no formato abaixo
            
            ```sql
            {
              name: 'João Alfredo',
              phone: '21998899222',
              cpf: '01234567890',
              birthday: '1992-10-25'
            }
            ```
            
        - **Response:** status 201, sem dados
        - **Regras de negócio:**
            - `cpf` deve ser uma string com 11 caracteres numéricos; `phone` deve ser uma string com 10 ou 11 caracteres numéricos; `name` deve estar presente e não pode ser uma string vazia; `birthday` deve ser uma data válida; ⇒ nesses casos, deve retornar **status 400.**
            - `cpf` não pode ser de um cliente já existente; ⇒ nesse caso deve retornar **status 409.**
    - Atualizar um cliente
        - **Rota:** **PUT** `/customers/:id`
        - **Request:** body no formato:
            
            ```sql
            {
              name: 'João Alfredo',
              phone: '21998899222',
              cpf: '01234567890',
              birthday: '1992-10-05'
            }
            ```
            
        - **Response:** status 200, sem dados.
        - **Regras de negócio:**
            - `cpf` deve ser uma string com 11 caracteres numéricos; `phone` deve ser uma string com 10 ou 11 caracteres numéricos; `name` deve estar presente e não pode ser uma string vazia; `birthday` deve ser uma data válida ⇒ nesses casos, deve retornar **status 400.**
            - `cpf` não pode ser de um cliente já existente ⇒ nesse caso deve retornar **status 409.** Observe que o conflito só deve ocorrer caso o CPF enviado pertença **a outro usuário**. O ****usuário pode desejar atualizar outras propriedades, mas manter seu CPF atual.
- CRUD de Aluguéis [Create | Read | Update | Delete]
    - Formato de um aluguel (tabela `rentals`)
        
        ```jsx
        {
          id: 1,
          customerId: 1,
          gameId: 1,
          rentDate: '2021-06-20',    // data em que o aluguel foi feito
          daysRented: 3,             // por quantos dias o cliente agendou o aluguel
          returnDate: null,          // data que o cliente devolveu o jogo (null enquanto não devolvido)
          originalPrice: 4500,       // preço total do aluguel em centavos (dias alugados vezes o preço por dia do jogo)
          delayFee: null             // multa total paga por atraso (dias que passaram do prazo vezes o preço por dia do jogo)
        }
        ```
        
    - Listar aluguéis
        - **Rota: GET** `/rentals`
        - **Response:** lista com todos os aluguéis, contendo o `customer` e o `game` do aluguel em questão em cada aluguel.
            
            ```jsx
            [
              {
                id: 1,
                customerId: 1,
                gameId: 1,
                rentDate: '2021-06-20',
                daysRented: 3,
                returnDate: null, // troca pra uma data quando já devolvido
                originalPrice: 4500,
                delayFee: null,
                customer: {
                 id: 1,
                 name: 'João Alfredo'
                },
                game: {
                  id: 1,
                  name: 'Banco Imobiliário'
                }
              }
            ]
            ```
            
            - Você deve realizar **apenas uma busca no banco de dados** que venha com todos os dados necessários e, no JavaScript, pode organizá-los da maneira esperada.
    - Inserir um aluguel
        - **Rota:** **POST** `/rentals`
        - **Request:** body no formato abaixo
            
            ```jsx
            {
              customerId: 1,
              gameId: 1,
              daysRented: 3
            }
            ```
            
        - **Response:** status 201, sem dados
        - **Regras de Negócio**
            - Ao inserir um aluguel, os campos `rentDate` e `originalPrice` devem ser populados automaticamente antes de salvá-lo:
                - `rentDate`: data atual no momento da inserção.
                - `originalPrice`: `daysRented` multiplicado pelo preço por dia do jogo no momento da inserção.
            - Ao inserir um aluguel, os campos `returnDate` e `delayFee` devem sempre começar como `null`.
            - Ao inserir um aluguel, deve verificar se `customerId` se refere a um cliente existente. Se não, deve responder com **status 400.**
            - Ao inserir um aluguel, deve verificar se `gameId` se refere a um jogo existente. Se não, deve responder com **status 400.**
            - `daysRented` deve ser um número maior que 0. Se não, deve responder com **status 400.**
            - Ao inserir um aluguel, deve-se validar que existem jogos disponíveis, ou seja, que não tem alugueis em aberto acima da quantidade de jogos em estoque. Caso contrário, deve retornar **status 400.**
    - Finalizar aluguel
        - **Rota:** **POST** `/rentals/:id/return`
        - **Response:** status 200, sem dados.
        - **Regras de Negócio**
            - Ao retornar um aluguel, o campo `returnDate` deve ser populado com a data atual do momento do retorno.
            - Ao retornar um aluguel, o campo `delayFee` deve ser automaticamente populado com um valor equivalente ao número de dias de atraso vezes o preço por dia do jogo no momento do retorno. Exemplo:
                - Se o cliente alugou no dia **20/06** um jogo por **3 dias**, ele deveria devolver no dia **23/06**. Caso ele devolva somente no dia **25/06**, o sistema deve considerar **2 dias de atraso**. Nesse caso, se o jogo custava **R$ 15,00** por dia, a `delayFee` deve ser de **R$ 30,00** (3000 centavos).
            - Ao retornar um aluguel, deve verificar se o `id` do aluguel fornecido existe. Se não, deve responder com **status 404.**
            - Ao retornar um aluguel, deve verificar se o aluguel já não está finalizado. Se estiver, deve responder com **status 400.**
    - Apagar aluguel
        - **Rota:** **DELETE** `/rentals/:id`
        - **Response:** status 200, sem dados
        - **Regras de Negócio:**
            - Ao excluir um aluguel, deve verificar se o `id` fornecido existe. Se não, deve responder com **status 404.**
            - Ao excluir um aluguel, deve verificar se o aluguel já não está finalizado (ou seja, `returnDate` já está preenchido). Se não estiver finalizado, deve responder com **status 400.**
- Deploy
    - [x]  Deverá ser realizado o deploy da sua API e do banco de dados utilizando a ferramenta Render.


## 🛠 &nbsp;Skills
<div align="center">
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="node logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />      
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" />                                   
</div>
<hr/>

## 🚀 &nbsp;Links

- [Deploy]().<br/>

```zsh
# iniciar servidor
npm run dev

# rodar banco
brew services start postgresql 
psql postgres 
brew services restart postgresql@14
   
# matar a porta comando no MAC
kill -9 PID

# listar as postar que estao sendo usada
lsof -i :5000
```

<hr/>

## 💬 &nbsp;Contact
<img align="left" src="https://avatars.githubusercontent.com/curtyraissa?size=100">

Feito por [Raissa Curty](https://github.com/curtyraissa)!

<a href="https://www.linkedin.com/in/raissa-curty/" target="_blank">
    <img style="border-radius:50%;" src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
</a>&nbsp;