const prisma = require("../lib/prisma")

exports.getAlimentoByName = async (req, res) => {
    try {
        const name = req.query.name
        const alimento = await prisma.alimento.findFirst({
            where: {
                nome:{
                    contains: name,
                    mode: 'insensitive'
                }
            }
        })

        return res.status(200).json(alimento)
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor"})
    }
}

exports.getManyAlimentos = async (req, res) =>{
    try {
        const name = req.query.name
        const alimentos = await prisma.alimento.findMany({
            where:{
                nome:{
                    contains: name,
                    mode: 'insensitive'
                }
            }
        })

        return res.status(200).json(alimentos)
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor"})
    }
    
}