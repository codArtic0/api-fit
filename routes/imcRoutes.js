const express = require('express')
const router = express.Router()

const { calcularIMC } = require('../controllers/imcController')

router.post('/calcular', calcularIMC)

module.exports = router