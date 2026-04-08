const express = require ('express')
const router = express.Router()

const {getAlimentoByName, getManyAlimentos} = require('../controllers/tacoController')

router.get('/getAlimentoByName', getAlimentoByName)
router.get('/getManyAlimentos', getManyAlimentos)

module.exports = router