/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Criar um novo usuário
 *     description: Cria um novo usuário com seus dados pessoais e calcula IMC e macronutrientes
 *     tags:
 *       - Usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 nome:
 *                   type: string
 *                 peso:
 *                   type: number
 *                 altura:
 *                   type: number
 *                 idade:
 *                   type: number
 *                 sexo:
 *                   type: string
 *                 atividade:
 *                   type: number
 *                 balancoCalorico:
 *                   type: number
 *                 alvo:
 *                   type: string
 *                 imc:
 *                   type: number
 *                 calorias:
 *                   type: number
 *                 proteina:
 *                   type: number
 *                 carboidrato:
 *                   type: number
 *                 gordura:
 *                   type: number
 *       400:
 *         description: Campos obrigatórios faltando
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/imc/calcular:
 *   post:
 *     summary: Calcular IMC
 *     description: Calcula o Índice de Massa Corporal baseado em peso e altura
 *     tags:
 *       - IMC
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IMCRequest'
 *     responses:
 *       200:
 *         description: IMC calculado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IMCResponse'
 *       400:
 *         description: Peso e altura obrigatórios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/macros/calcular:
 *   post:
 *     summary: Calcular macronutrientes
 *     description: Calcula os macronutrientes e calorias diárias baseado no perfil do usuário
 *     tags:
 *       - Macronutrientes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MacrosRequest'
 *     responses:
 *       200:
 *         description: Macronutrientes calculados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MacrosResponse'
 *       400:
 *         description: Campos obrigatórios faltando
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/taco/getAlimentoByName:
 *   get:
 *     summary: Buscar alimento por nome
 *     description: Busca um alimento específico na tabela TACO pelo nome (busca case-insensitive)
 *     tags:
 *       - TACO (Alimentos)
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do alimento para buscar
 *         example: "arroz, tipo 1"
 *     responses:
 *       200:
 *         description: Alimento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alimento'
 *       404:
 *         description: Alimento não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/taco/getManyAlimentos:
 *   get:
 *     summary: Buscar múltiplos alimentos
 *     description: Busca múltiplos alimentos na tabela TACO pelo nome (busca case-insensitive)
 *     tags:
 *       - TACO (Alimentos)
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Parte do nome dos alimentos para buscar
 *         example: "arroz"
 *     responses:
 *       200:
 *         description: Lista de alimentos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alimento'
 *       404:
 *         description: Nenhum alimento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/taco/macrosPorGrama:
 *   post:
 *     summary: Calcular macronutrientes por grama de alimento
 *     description: Recebe os macros de um JSON e retorna todos divididos por 100 (Tabela TACO usa macros por 100g de alimento)
 *     tags:
 *       - TACO (Alimentos)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MacrosGramaRequest'
 *     responses:
 *       200:
 *         description: Macronutrientes por grama calculados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MacrosGramaResponse'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
