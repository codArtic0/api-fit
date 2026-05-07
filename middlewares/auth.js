const jwt = require('jsonwebtoken')

exports.verificarToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = decoded
    next()
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado" })
  }
}

exports.verificarProprietario = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    const idSolicitado = Number(req.query.id || req.params.id)
    
    if (decoded.id !== idSolicitado) {
      return res.status(403).json({ error: "Você não tem permissão para acessar dados de outro usuário" })
    }

    req.usuario = decoded
    next()
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado" })
  }
}
