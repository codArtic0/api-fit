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
        url: 'https://github.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'http://localhost:5000',
        description: 'Production server',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['nome', 'peso', 'altura', 'idade', 'sexo', 'atividade', 'balancoCalorico', 'alvo'],
          properties: {
            nome: {
              type: 'string',
              example: 'João Silva',
              description: 'Nome do usuário'
            },
            peso: {
              type: 'number',
              example: 75,
              description: 'Peso em kg'
            },
            altura: {
              type: 'number',
              example: 180,
              description: 'Altura em centímetros'
            },
            idade: {
              type: 'number',
              example: 30,
              description: 'Idade em anos'
            },
            sexo: {
              type: 'string',
              enum: ['M', 'F'],
              example: 'M',
              description: 'Sexo (M para masculino, F para feminino)'
            },
            atividade: {
              type: 'number',
              enum: [0, 1, 2, 3, 4],
              example: 3,
              description: 'Fator de atividade ([0] - 1.2=sedentário, [1] -1.375=leve, [2] - 1.55=moderado, [3] - 1.725=intenso, [4] - 1.9=muito intenso)'
            },
            balancoCalorico: {
              type: 'number',
              example: -500,
              description: 'Balanço calórico em calorias (negativo para déficit, positivo para superávit)'
            },
            alvo: {
              type: 'string',
              enum: ['BULKING', 'CUTTING', 'MANUTENCAO'],
              example: 'CUTTING',
              description: 'Objetivo (BULKING ou CUTTING)'
            }
          }
        },
        IMCRequest: {
          type: 'object',
          required: ['peso', 'altura'],
          properties: {
            peso: {
              type: 'number',
              example: 75,
              description: 'Peso em kg'
            },
            altura: {
              type: 'number',
              example: 180,
              description: 'Altura em centímetros'
            }
          }
        },
        IMCResponse: {
          type: 'object',
          properties: {
            imc: {
              type: 'number',
              example: 23.148148148148145
            },
            classificacao: {
              type: 'string',
              example: 'normal'
            }
          }
        },
        MacrosRequest: {
          type: 'object',
          required: ['peso', 'altura', 'idade', 'sexo', 'atividade', 'balancoCalorico', 'alvo'],
          properties: {
            peso: { type: 'number', example: 75 },
            altura: { type: 'number', example: 180 },
            idade: { type: 'number', example: 30 },
            sexo: { type: 'string', enum: ['M', 'F'], example: 'M' },
            atividade: { type: 'number', example: 3 },
            balancoCalorico: { type: 'number', example: -500 },
            alvo: { type: 'string', enum: ['BULKING', 'CUTTING'], example: 'CUTTING' }
          }
        },
        MacrosResponse: {
          type: 'object',
          properties: {
            tmb: {type: 'number', example: 1730},
            tdee: {type: 'number', example: 2984.25},
            calorias: { type: 'number', example: 2484.25 },
            proteina: { type: 'number', example: 165 },
            gordura: { type: 'number', example: 60 },
            carboidrato: { type: 'number', example: 321.06 }
            
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
            error: {
              type: 'string',
              example: 'Mensagem de erro'
            }
          }
        }
      }
    }
  },
  apis: ['./swaggerPaths.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
