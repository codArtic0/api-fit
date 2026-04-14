const express = require('express')
const router = express.Router()

const { createUser, getUser} = require('../controllers/userController')

router.post('/create', createUser)
router.get('/getUser', getUser)

module.exports = router