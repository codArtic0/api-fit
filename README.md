# 🍎 API FIT - Planejamento Nutricional Inteligente

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.19.3-blue.svg)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue.svg)](https://www.postgresql.org/)
[![Swagger](https://img.shields.io/badge/Swagger-6.2.8-green.svg)](https://swagger.io/)

A **APIFit** é uma API RESTful robusta desenvolvida em Node.js para auxiliar no planejamento nutricional e avaliação física. Utilizando fórmulas científicas como Mifflin-St Jeor para cálculo de TMB e TDEE, a API oferece ferramentas completas para criação de perfis nutricionais, cálculo de macronutrientes personalizados e integração com a Tabela Brasileira de Composição de Alimentos (TACO) para rastreamento preciso de refeições.

> ⚠️ **IMPORTANTE**: Esta API não substitui uma avaliação nutricional profissional. Os cálculos são estimativas baseadas em fórmulas matemáticas e devem ser utilizados como ferramenta auxiliar.

---

## ✨ Funcionalidades

### 👤 Gestão de Usuários
- Criação de perfis nutricionais completos
- Cálculo automático de IMC (Índice de Massa Corporal)
- Definição de metas nutricionais (Bulking, Cutting, Manutenção)
- Rastreamento diário de consumo calórico e macronutrientes

### 🧮 Calculadoras Nutricionais
- **IMC**: Cálculo baseado em peso e altura
- **TMB (Taxa Metabólica Basal)**: Fórmula Mifflin-St Jeor
- **TDEE (Gasto Energético Total Diário)**: Considerando nível de atividade
- **Macronutrientes**: Proteínas, Carboidratos e Gorduras personalizados

### 🥗 Integração com TACO
- Base de dados com mais de 500 alimentos da Tabela TACO
- Busca inteligente por nome de alimentos
- Cálculo preciso de macronutrientes por porção
- Suporte a múltiplas porções e quantidades

### 📊 Rastreamento Diário
- Registro de refeições com alimentos específicos
- Atualização automática dos contadores diários
- Verificação de atingimento de metas nutricionais
- Reset diário dos contadores

### 📚 Documentação Interativa
- Documentação completa via Swagger UI
- Exemplos práticos de requisições
- Teste direto dos endpoints na interface

---

## 🏗️ Arquitetura

A API utiliza a arquitetura **MVC (Model-View-Controller)** integrada ao **Prisma ORM** para garantir organização e escalabilidade:

```
📁 api-fit/
├── 📄 app.js                 # Configuração Express e middlewares
├── 📄 server.js              # Inicialização do servidor
├── 📁 config/                # Configurações de ambiente
├── 📁 controllers/           # Lógica de negócio e orquestração
├── 📁 services/              # Serviços de cálculo (IMC, Macros, TACO)
├── 📁 routes/                # Definição dos endpoints RESTful
├── 📁 lib/                   # Instância centralizada do Prisma
├── 📁 prisma/                # Schema, migrations e seeds
├── 📁 swagger/               # Documentação da API
└── 📄 importCSV.js           # Script de importação TACO
```

---

## 🚀 Tecnologias Utilizadas

- **Runtime**: [Node.js](https://nodejs.org/) (v18+)
- **Framework**: [Express.js](https://expressjs.com/) (v5.2.1)
- **ORM**: [Prisma](https://www.prisma.io/) (v6.19.3)
- **Banco**: [PostgreSQL](https://www.postgresql.org/) (v15+)
- **Documentação**: [Swagger/OpenAPI](https://swagger.io/) (v6.2.8)
- **CSV Parser**: [csv-parser](https://www.npmjs.com/package/csv-parser) (v3.2.0)
- **Dev Tool**: [Nodemon](https://nodemon.io/) para desenvolvimento

### Fórmulas Implementadas
- **IMC**: `peso / (altura²)`
- **TMB (Mifflin-St Jeor)**:
  - Homens: `(10 × peso) + (6.25 × altura) - (5 × idade) + 5`
  - Mulheres: `(10 × peso) + (6.25 × altura) - (5 × idade) - 161`
- **TDEE**: `TMB × Fator de Atividade`
- **Macronutrientes**: Baseado em peso corporal e objetivos

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (versão 15 ou superior)
- [Git](https://git-scm.com/) para clonar o repositório
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) como gerenciador de pacotes

---

## 🛠️ Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/codartic0/api-fit.git
cd api-fit
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure o Banco de Dados
Crie um banco PostgreSQL e configure as variáveis de ambiente:

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o .env com suas configurações
PORT=3000
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

### 4. Execute as Migrations
```bash
# Sincronize o schema com o banco
npx prisma migrate dev

# (Opcional) Visualize o banco no Prisma Studio
npx prisma studio
```

### 5. Popule a Base TACO
```bash
# Execute o script de importação
node importCSV.js
```

### 6. Inicie o Servidor
```bash
# Modo desenvolvimento (com Nodemon)
npm run dev

# Ou modo produção
node server.js
```

O servidor estará rodando em `http://localhost:3000` e a documentação em `http://localhost:3000/api-docs/`.

---

## 📖 Uso da API

### Exemplos de Requisições

#### Criar um Usuário
```bash
POST /api/user/create
Content-Type: application/json

{
  "nome": "João Silva",
  "peso": 75,
  "altura": 180,
  "idade": 30,
  "genero": "M",
  "atividade": 2,
  "balancoCalorico": -500,
  "alvo": "CUTTING"
}
```

#### Calcular IMC
```bash
POST /api/imc/calcular
Content-Type: application/json

{
  "peso": 75,
  "altura": 180
}
```

#### Buscar Alimento TACO
```bash
GET /api/taco/getAlimentoByName?name=arroz
```

#### Registrar Refeição
```bash
POST /api/daily/registrar
Content-Type: application/json

{
  "idUser": 1,
  "g": 100,
  "alimento": "Arroz branco cozido"
}
```

---

## 🔗 Endpoints Principais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/user/create` | Criar novo usuário com perfil nutricional |
| `POST` | `/api/imc/calcular` | Calcular IMC |
| `POST` | `/api/macros/calcular` | Calcular macronutrientes |
| `GET` | `/api/taco/getAlimentoByName` | Buscar alimento específico |
| `GET` | `/api/taco/getManyAlimentos` | Buscar múltiplos alimentos |
| `POST` | `/api/taco/macrosPorGrama` | Calcular macros por grama |
| `POST` | `/api/daily/registrar` | Registrar refeição diária |
| `POST` | `/api/daily/zerar` | Zerar contadores diários |

Para documentação completa, acesse `/api-docs/` quando o servidor estiver rodando.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes
- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário
- Use commits descritivos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Codartic0**
- GitHub: [@codartic0](https://github.com/codartic0)
- LinkedIn: [Raul Sousa](https://linkedin.com/in/raulsousapv)

---

## 🙏 Agradecimentos

- Universidade de São Paulo (USP) pela Tabela TACO
- Comunidade de desenvolvedores Node.js
- Contribuidores do projeto Prisma

---

*Desenvolvido com ❤️ para auxiliar na jornada fitness e nutricional.*