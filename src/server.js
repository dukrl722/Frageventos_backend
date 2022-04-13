const app = require("./app.js").default
const PORT = 8000

app.listen(PORT, () => {
  console.log(`🎁 Servidor rodando na porta ${PORT}`)
})
