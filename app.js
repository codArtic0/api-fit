const express = require('express')
const app = express()

const imcRoutes = require('./routes/imcRoutes')
const macrosRoutes = require('./routes/macrosRoutes')

app.use(express.json())

app.use('/api', imcRoutes, macrosRoutes)

module.exports = app