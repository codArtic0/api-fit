const prisma = require("../lib/prisma")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.encontrarUsuario = async (id) => {
    const user = await prisma.user.findFirst({
        where: {
            id:{
                equals: id
            }
        }})
    return user
}

exports.loginUsuario = async (id, senha) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }
        })

        if (!user) {
            return { sucesso: false, mensagem: "Usuário não encontrado" }
        }

        if (!user.senha) {
            return { sucesso: false, mensagem: "Usuário não possui senha cadastrada" }
        }

        const senhaValida = await bcrypt.compare(senha, user.senha)
        
        if (!senhaValida) {
            return { sucesso: false, mensagem: "Senha incorreta" }
        }

        const token = jwt.sign(
            { id: user.id, nome: user.nome },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        return { 
            sucesso: true, 
            mensagem: "Login realizado com sucesso",
            token,
            user: {
                id: user.id,
                nome: user.nome,
                imc: user.imc,
                peso: user.peso
            }
        }
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao fazer login", erro: error.message }
    }
}

exports.hashSenha = async (senha) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(senha, salt)
}