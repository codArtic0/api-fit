const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API FIT - Calculadora Nutricional',
      version: '1.0.0',
      description: 'API para cálculo de IMC, macronutrientes e busca de alimentos da tabela TACO',
      contact: {
        name: 'Support',
        url: 'https://github.com/codartic0',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['nome', 'peso', 'altura', 'idade', 'genero', 'atividade', 'balancoCalorico', 'alvo'],
          properties: {
            id: { type: 'number', example: 1 },
            nome: { type: 'string', example: 'João Silva' },
            peso: { type: 'number', example: 75, description: 'Peso em kg' },
            altura: { type: 'number', example: 180, description: 'Altura em cm' },
            idade: { type: 'number', example: 30 },
            genero: { type: 'string', enum: ['M', 'F'], example: 'M' },
            atividade: { 
              type: 'number', 
              enum: [0, 1, 2, 3, 4], 
              description: '[0]:Sedentário, [1]:Leve, [2]:Moderado, [3]:Intenso, [4]:Muito Intenso' 
            },
            balancoCalorico: { type: 'number', example: -500 },
            alvo: { type: 'string', enum: ['BULKING', 'CUTTING', 'MANUTENCAO'], example: 'CUTTING' },
            imc: { type: 'number', example: 23.15 },
            tmb: { type: 'number', example: 1730 },
            tdee: { type: 'number', example: 2984.25 },
            calorias: { type: 'number', example: 2484.25 },
            proteinas: { type: 'number', example: 165 },
            gorduras: { type: 'number', example: 60 },
            carboidratos: { type: 'number', example: 321.06 },
            caloriasDoDia: { type: 'number', example: 500 },
            proteinasDoDia: { type: 'number', example: 50 },
            gordurasDoDia: { type: 'number', example: 20 },
            carboidratosDoDia: { type: 'number', example: 60 },
            createdAt: { type: 'string', format: 'date-time', example: '2023-01-01T00:00:00.000Z' }
          }
        },
        IMCRequest: {
          type: 'object',
          required: ['peso', 'altura'],
          properties: {
            peso: { type: 'number', example: 75 },
            altura: { type: 'number', example: 180 }
          }
        },
        IMCResponse: {
          type: 'object',
          properties: {
            imc: { type: 'number', example: 23.15 },
            legenda: { type: 'string', example: 'normal' }
          }
        },
        MacrosRequest: {
          type: 'object',
          required: ['peso', 'altura', 'idade', 'genero', 'atividade', 'alvo'],
          properties: {
            peso: { type: 'number', example: 75, description: 'Peso em kg' },
            altura: { type: 'number', example: 180, description: 'Altura em cm' },
            idade: { type: 'number', example: 30 },
            genero: { type: 'string', enum: ['M', 'F'], example: 'M' },
            atividade: { 
              type: 'number', 
              enum: [0, 1, 2, 3, 4], 
              description: '[0]:Sedentário, [1]:Leve, [2]:Moderado, [3]:Intenso, [4]:Muito Intenso' 
            },
            balancoCalorico: { type: 'number', example: -500 },
            alvo: { type: 'string', enum: ['BULKING', 'CUTTING', 'MANUTENCAO'], example: 'CUTTING' }
          }
        },
        MacrosGramaRequest: {
          type: 'object',
          required: ['calorias', 'proteina', 'carboidrato', 'gordura'],
          properties: {
            calorias: { type: 'number', example: 128 },
            proteina: { type: 'number', example: 2.5 },
            carboidrato: { type: 'number', example: 28.1 },
            gordura: { type: 'number', example: 0.2 }
          }
        },
        MacrosGramaResponse: {
          type: 'object',
          properties: {
            calorias: { type: 'number', example: 1.28 },
            proteina: { type: 'number', example: 0.025 },
            carboidrato: { type: 'number', example: 0.281 },
            gordura: { type: 'number', example: 0.002 }
          }
        },
        Alimento: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '1' },
            nome: { type: 'string', example: 'Arroz branco cozido' },
            calorias: { type: 'number', example: 130 },
            proteina: { type: 'number', example: 2.7 },
            carboidrato: { type: 'number', example: 28 },
            gordura: { type: 'number', example: 0.3 },
            porcao: { type: 'string', example: '100g' }
          }
        },
        DailyRegistrarRequest: {
          type: 'object',
          required: ['idUser', 'g', 'alimento'],
          properties: {
            idUser: { type: 'number', example: 1 },
            g: { type: 'number', example: 100 },
            alimento: { type: 'string', example: 'Arroz branco cozido' }
          }
        },
        DailyZerarRequest: {
          type: 'object',
          required: ['idUser'],
          properties: {
            idUser: { type: 'number', example: 1 }
          }
        },
        VerificacaoResponse: {
          type: 'object',
          properties: {
            calorias: { type: 'string', example: 'Bateu calorias!' },
            proteinas: { type: 'string', example: 'Bateu proteinas!' },
            carboidratos: { type: 'string', example: 'Bateu carboidratos!' },
            gorduras: { type: 'string', example: 'Bateu gorduras!' }
          }
        },
        DailyRegistrarResponse: {
          type: 'object',
          properties: {
            user: { $ref: '#/components/schemas/User' },
            verificacao: { $ref: '#/components/schemas/VerificacaoResponse' }
          }
        },
        DailyZerarResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Zerou!' },
            data: { $ref: '#/components/schemas/User' }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: { type: 'string', example: 'Mensagem de erro' }
          }
        }
      }
    }
  },
  apis: ['./swaggerPaths.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;