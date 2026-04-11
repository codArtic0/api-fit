const prisma = require("../lib/prisma")

exports.encontrarAlimentoUnitario = async (data) => {
    const alimento = await prisma.alimento.findFirst({
        where: {
            nome:{
                contains: data,
                mode: 'insensitive'
            }
        }})
    return alimento
}

exports.encontrarAlimentoEmQuantidade = async (data) =>{
    const alimento = await prisma.alimento.findMany({
        where: {
            nome:{
                contains: data,
                mode: 'insensitive'
            }
        }})
    return alimento
}


exports.calcularMacrosPorGrama = async (data) =>{

    const macrosCalculados = {
        calorias: data.calorias/100,
        proteina: data.proteina/100,
        carboidrato: data.carboidrato/100,
        gordura: data.gordura/100
    }

    return macrosCalculados
}