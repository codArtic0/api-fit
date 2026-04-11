const express = require('express')
const router = express.Router()

const { registrarRefeicao, zerarRefeicao } = require('../controllers/dailyController')

router.post('/registrar', registrarRefeicao)
router.post('/zerar', zerarRefeicao)

module.exports = router