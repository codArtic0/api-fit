const express = require('express')
const app = express()

const helloRoutes = require('./routes/imcRoutes')

app.use(express.json())

app.use('/api', helloRoutes)

module.exports = app