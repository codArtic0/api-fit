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
        if (alimento){
            return res.status(200).json(alimento)
        }
        else{
            return res.status(404).json({error: "alimento não encontrado!"})
        }
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
        if (alimentos.length>0){
            return res.status(200).json(alimentos)
        }
        else{
            return res.status(404).json({error: "alimento não encontrado!"})
        }
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor"})
    }
    
}