const prisma = require("../lib/prisma")
const tacoServices = require('../services/tacoServices');

exports.getAlimentoByName = async (req, res) => {
    try {
        const name = req.query.name
        const alimento = await tacoServices.encontrarAlimentoUnitario(name)
        console.log(alimento)
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
        const alimentos = await tacoServices.encontrarAlimentoEmQuantidade(name)
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

exports.calcularTacoPorGrama = async (req, res) =>{
    console.log(req.body)
    try {
        const macros = {
        calorias: req.body.calorias,
        proteina: req.body.proteina,
        carboidrato: req.body.carboidrato,
        gordura: req.body.gordura
    }

    const macrosPorGrama = await tacoServices.calcularMacrosPorGrama(macros)
    return res.status(200).json(macrosPorGrama)
    
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor"})
    }
}