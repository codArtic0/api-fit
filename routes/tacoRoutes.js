const express = require ('express')
const router = express.Router()

const {getAlimentoByName, getManyAlimentos, calcularTacoPorGrama} = require('../controllers/tacoController')

router.get('/getAlimentoByName', getAlimentoByName)
router.get('/getManyAlimentos', getManyAlimentos)
router.post('/macrosPorGrama', calcularTacoPorGrama)

module.exports = router