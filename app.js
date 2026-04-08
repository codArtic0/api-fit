const express = require('express')
const app = express()

const imcRoutes = require('./routes/imcRoutes')
const macrosRoutes = require('./routes/macrosRoutes')
const tacoRoutes = require('./routes/tacoRoutes')

app.use(express.json())

app.use('/api/imc', imcRoutes);
app.use('/api/macros', macrosRoutes);
app.use('/api/taco', tacoRoutes);

module.exports = app