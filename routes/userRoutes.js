const express = require('express')
const router = express.Router()

const { createUser, getUser, login } = require('../controllers/userController')
const { verificarProprietario } = require('../middlewares/auth')

router.post('/create', createUser)
router.get('/getUser', verificarProprietario, getUser)
router.post('/login', login)

module.exports = router