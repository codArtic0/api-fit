# 🍎 API FIT - Planejamento Nutricional Inteligente

O APIFit é uma API robusta desenvolvida em Node.js para auxiliar no planejamento nutricional e avaliação física. Além de realizar cálculos complexos de TMB, TDEE e Macronutrientes, o sistema realiza a persistência de perfis de usuários em um banco de dados relacional.

---

## 📂 Estrutura do Projeto

A API utiliza a arquitetura MVC (Model-View-Controller) integrada ao Prisma ORM para garantir organização e escalabilidade:

* **controllers/**: Lógica de recebimento de requisições e orquestração dos dados.
* **services/**: Motores de cálculo (IMC, TMB e Macros) isolados.
* **prisma/**: Definição do Schema, Enums e histórico de Migrations.
* **lib/**: Instância centralizada e otimizada do Prisma Client.
* **routes/**: Gerenciamento dos endpoints RESTful.
* **app.js**: Configuração do Express e middlewares.

---

## 🚀 Tecnologias Utilizadas

* **Node.js & Express**: Ambiente de execução e framework web.
* **Prisma ORM**: Gerenciamento de banco de dados e tipagem.
* **PostgreSQL**: Banco de dados relacional para persistência.
* **Nodemon**: Ferramenta de auxílio ao desenvolvimento.
* **Mifflin-St Jeor**: Equação utilizada para o cálculo de TMB.

---

## 📌 Documentação da API

### 1. Criar e Calcular Usuário (Persistência)
**Endpoint:** `POST /api/user/create`  
Calcula todos os parâmetros nutricionais e salva o perfil completo no banco de dados.

**Exemplo de Corpo da Requisição (JSON):**
{
  "nome": "Fulano",
  "peso": 80,
  "altura": 185,
  "idade": 19,
  "sexo": "M",
  "atividade": 3,
  "balancoCalorico": -500,
  "alvo": "Cutting"
}

### 2. Endpoints de Cálculo Rápido (Sem persistência)
* `POST /api/macros`: Retorna os cálculos de TMB, TDEE e Macros.
* `POST /api/imc`: Retorna o valor do IMC e sua classificação.

---

## 🛠️ Como Executar o Projeto

1. **Clone o repositório:**
   git clone https://github.com/codartic0/api-fit.git
   cd api-fit

2. **Instale as dependências:**
   npm install

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as seguintes chaves:
   DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO?schema=public"
   PORT=3000

4. **Sincronize o banco de dados:**
   npx prisma migrate dev

5. **Inicie o servidor:**
   npm run dev

O servidor estará rodando em http://localhost:3000 por padrão.

---

## 📝 Licença
Este projeto está sob a licença MIT.