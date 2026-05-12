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
    const palavras = data.split(' ').filter(p => p.trim() !== '');
    
    const condicoes = palavras.map(palavra => ({
        nome: {
            contains: palavra,
            mode: 'insensitive'
        }
    }));

    const alimento = await prisma.alimento.findMany({
        where: {
            AND: condicoes
        }
    })
    return alimento
}


exports.calcularMacrosPorGrama = async (data) =>{

    const macrosCalculados = {
        calorias: Number(data.calorias/100),
        proteina: Number(data.proteina/100),
        carboidrato: Number(data.carboidrato/100),
        gordura: Number(data.gordura/100)
    }

    return macrosCalculados
}