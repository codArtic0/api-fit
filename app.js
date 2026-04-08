const express = require('express')
const app = express()

const imcRoutes = require('./routes/imcRoutes')
const macrosRoutes = require('./routes/macrosRoutes')
const tacoRoutes = require('./routes/tacoRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())

app.use('/api/imc', imcRoutes);
app.use('/api/macros', macrosRoutes);
app.use('/api/taco', tacoRoutes);
app.use('/api/user', userRoutes);

module.exports = app