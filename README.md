# Monitoramento de Serviços

## API de Monitoramento de Serviços

Este projeto é uma API desenvolvida para monitorar o status de serviços e aplicações, permitindo registrar incidentes, acompanhar o tempo de resposta e o estado atual de cada serviço.

---

### Tecnologias Utilizadas

- **Node.js** – Runtime JavaScript
- **TypeScript** – Superset do JavaScript para tipagem estática
- **Express** – Framework para criação de APIs REST
- **Express-Validator** – Validação de dados das requisições
- **Dotenv** – Gerenciamento de variáveis de ambiente
- **Prisma** – ORM para banco de dados PostgreSQL
- **PostgreSQL** – Banco de dados relacional
- **Axios** – Realização de requisições HTTP
- **BullMQ** – Gerenciamento de filas para tarefas assíncronas
- **ioredis** – Cliente Redis para gerenciamento de filas

---

### Funcionalidades

- Cadastro e gerenciamento de serviços a serem monitorados
- Monitoramento do status de serviços (ONLINE, INSTÁVEL, OFFLINE)
- Registro de incidentes detectados durante verificações
- Controle de tempo de resposta e última verificação
- Integração com Redis para filas assíncronas de monitoramento

---

### Estrutura do Projeto

```yaml
src
├─ controllers # Funções que controlam a lógica das rotas
├─ middleware # Middlewares para validação, autenticação etc.
├─ routes # Rotas da API
├─ workers # Jobs assíncronos de monitoramento
├─ app.ts # Configuração principal do Express
└─ server.ts # Inicialização do servidor
```

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Linzackk/monitoramentoServicos
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo .env com as variáveis necessárias:

```bash
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
PORT=3000
```


4. Execute as migrations do Prisma:
```bash
npx prisma migrate dev
```

5. Inicie a aplicação:
```bash
npm run dev
```

---

### Rotas Principais:
#### Serviços
  - GET /services – Listar todos os serviços
  - POST /services – Criar um novo serviço
  - PUT /services/:id – Atualizar um serviço
  - DELETE /services/:id – Remover um serviço

#### Incidentes
  - GET /incidents – Listar incidentes
  - GET /incidents/:serviceId – Listar incidentes de um serviço específico

---

### Observações:
- O monitoramento dos serviços é feito de forma assíncrona usando filas com BullMQ e Redis.
- É possível configurar diferentes ambientes para os serviços (produção, staging, desenvolvimento).

---

Contribuição:
Contribuições são bem-vindas! Para sugerir melhorias ou enviar pull requests:

1. Faça um fork do projeto
2. Crie uma branch com a sua feature (git checkout -b feature/nome-da-feature)
3. Faça commit das suas alterações (git commit -m 'Adiciona nova feature')
4. Faça push para a branch (git push origin feature/nome-da-feature)
5. Abra um Pull Request

---
