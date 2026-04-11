const express = require('express')
const router = express.Router()

const { registrarRefeicao } = require('../controllers/dailyController')

router.post('/registrar', registrarRefeicao)

module.exports = router