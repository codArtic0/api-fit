const express = require('express')
const router = express.Router()

const { calcularMacros } = require('../controllers/macrosController')

router.post('/calcular', calcularMacros)

module.exports = router