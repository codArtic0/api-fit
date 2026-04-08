const app = require('./app')
const { PORT } = require('./config/env')

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log("NOTA: Essa API NÃO SUBSTITUI uma availiação nutricional. São apenas valores estimados baseados em fórmulas matemáticas!")
})