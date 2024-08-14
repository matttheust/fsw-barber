# Projeto FSW Barber

Um sistema de gerenciamento de barbearias com funcionalidades para listar, criar e gerenciar barbearias e seus serviços. Este projeto utiliza o Prisma ORM para interação com o banco de dados PostgreSQL e fornece uma API para integração com o frontend.

## Índice
- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Execução do Projeto](#execução-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Sobre

O FSW Barber é um sistema para gerenciar barbearias, permitindo que os usuários visualizem informações sobre diferentes locais, suas ofertas de serviços e muito mais. O sistema é baseado em Node.js e Prisma, com uma base de dados PostgreSQL.

## Funcionalidades

- **Gerenciamento de Barbearias**: Adicionar, listar e visualizar detalhes das barbearias.
- **Serviços de Barbearia**: Listar e visualizar serviços oferecidos por cada barbearia.
- **Banco de Dados**: Utiliza PostgreSQL como banco de dados principal.
- **Seeding**: Script para popular o banco de dados com dados fictícios.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Prisma**: ORM para Node.js que facilita a interação com o banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.

## Configuração do Ambiente

Para rodar o projeto localmente, siga estes passos:

1. **Clone o Repositório**
    ``` git clone https://github.com/seu-usuario/fsw-barber.git ```
    ``` cd fsw-barber ```

2. **Instale as Dependências**
    ``` npm install ```

3. **Configure o Banco de Dados**
   
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo, substituindo a URL pelo endereço do seu banco de dados PostgreSQL:
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

4. **Execute as Migrations**
   
   Crie as tabelas no banco de dados com o Prisma:
    ``` npx prisma migrate dev --name init ```

5. **Seed o Banco de Dados**
   
   Popule o banco de dados com dados fictícios:
    ``` npx ts-node prisma/seed.ts ```

6. **Inicie o Servidor**
    ``` npm start ```

## Estrutura do Projeto

- `prisma/`: Contém o esquema Prisma e o script de seed.
- `src/`: Código-fonte do projeto.
  - `models/`: Modelos de dados.
  - `services/`: Lógica de serviços.
  - `routes/`: Definições das rotas da API.
  - `utils/`: Funções utilitárias.
- `prisma/schema.prisma`: Define o esquema do banco de dados.
- `prisma/seed.ts`: Script para popular o banco de dados com dados fictícios.
- `package.json`: Gerenciamento de dependências e scripts do projeto.
- `.env`: Configurações do ambiente.
