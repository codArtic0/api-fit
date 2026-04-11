const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const specs = require('./swagger')

const imcRoutes = require('./routes/imcRoutes')
const macrosRoutes = require('./routes/macrosRoutes')
const tacoRoutes = require('./routes/tacoRoutes')
const userRoutes = require('./routes/userRoutes')
const dailyRoutes = require('./routes/dailyRoutes')

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { 
  customCss: '.swagger-ui { font-family: Arial, sans-serif; }',
  customSiteTitle: 'API FIT - Documentação'
}))

app.use('/api/imc', imcRoutes);
app.use('/api/macros', macrosRoutes);
app.use('/api/taco', tacoRoutes);
app.use('/api/user', userRoutes);
app.use('/api/daily', dailyRoutes)

module.exports = app