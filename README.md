# 🍎 NutriCalc API - Calculadora de Macronutrientes e IMC

O NutriCalc é uma API desenvolvida em Node.js para auxiliar no planejamento nutricional e avaliação física. O sistema calcula a Taxa Metabólica Basal (TMB), o Gasto Energético Total (TDEE), a distribuição de macronutrientes e o Índice de Massa Corporal (IMC).

---

## 📂 Estrutura do Projeto

A API segue o padrão arquitetural MVC para garantir organização e separação de responsabilidades:

* **config/**: Arquivos de configuração global e variáveis de ambiente.
* **controllers/**: Contém a lógica de negócio (cálculos de macros e IMC).
* **models/**: Definição das estruturas de dados e comunicação com banco de dados.
* **routes/**: Gerenciamento dos endpoints e métodos HTTP.
* **app.js**: Configuração central do Express e middlewares.
* **server.js**: Inicialização do servidor e escuta da porta.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* Mifflin-St Jeor (Equação para TMB)
* Nodemon (Ambiente de desenvolvimento)

---

## 📌 Documentação da API

### 1. Calcular Macronutrientes
**Endpoint:** `POST /api/macros`

**Corpo da Requisição (JSON):**
{
  "peso": 70,
  "altura": 175,
  "idade": 25,
  "sexo": "M",
  "atividade": 2,
  "balancoCalorico": 300,
  "alvo": "Bulking"
}

### 2. Calcular IMC
**Endpoint:** `POST /api/imc`

**Corpo da Requisição (JSON):**
{
  "peso": 70,
  "altura": 175
}

---

## 🛠️ Como Executar o Projeto

1.  Clone o repositório:
    git clone https://github.com/codartic0/api-fit.git

2.  Instale as dependências:
    npm install

3.  Configure as variáveis de ambiente:
    Crie um arquivo .env baseado no .env.example.

4.  Inicie o servidor:
    npm start (ou npm run dev com nodemon)

O servidor estará rodando em http://localhost:PORT (PORT definido no seu .env) por padrão.

---

## 📝 Licença
Este projeto está sob a licença MIT.