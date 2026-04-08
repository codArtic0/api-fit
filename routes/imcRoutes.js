const express = require('express')
const router = express.Router()

const { calcularIMC } = require('../controllers/imcController')

router.post('/imc', calcularIMC)

module.exports = router