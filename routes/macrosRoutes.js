const express = require('express')
const router = express.Router()

const { calcularMacros } = require('../controllers/macrosController')

router.post('/macros', calcularMacros)

module.exports = router