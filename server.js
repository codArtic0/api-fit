const app = require('./app')
const { PORT: configPort } = require('./config/env')

const PORT = process.env.PORT || configPort || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(`Documentação: https://api-fit-j5og.onrender.com/api-docs/`)
  console.log("NOTA: Essa API não substitui uma avaliação nutricional.")
})