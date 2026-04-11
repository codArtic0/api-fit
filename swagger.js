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
            alvo: { type: 'string', enum: ['BULKING', 'CUTTING', 'MANUTENCAO'], example: 'CUTTING' }
          }
        },
        IMCResponse: {
          type: 'object',
          properties: {
            imc: { type: 'number', example: 23.15 },
            classificacao: { type: 'string', example: 'Normal' }
          }
        },
        MacrosResponse: {
          type: 'object',
          properties: {
            tmb: { type: 'number', example: 1730 },
            tdee: { type: 'number', example: 2984.25 },
            calorias: { type: 'number', example: 2484.25 },
            proteina: { type: 'number', example: 165 },
            gordura: { type: 'number', example: 60 },
            carboidrato: { type: 'number', example: 321.06 }
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