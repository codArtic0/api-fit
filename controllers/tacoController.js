const prisma = require("../lib/prisma")

exports.getAlimentoByName = async (req, res) => {

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
}

exports.getManyAlimentos = async (req, res) =>{
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
}