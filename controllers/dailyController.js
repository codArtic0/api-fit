const prisma = require("../lib/prisma")
const tacoServices = require("../services/tacoServices")
const dailyServices = require("../services/dailyServices")

exports.registrarRefeicao = async (req,res) =>{ 
    const idUser = Number(req.body.idUser)
    const quantGramas = Number(req.body.g)
    try {
        const macros = await tacoServices.encontrarAlimentoUnitario(req.body.alimento)
        if (!macros) {
            return res.status(404).json({ error: "Alimento não encontrado na base TACO." });
        }

        const macrosPorGrama = await tacoServices.calcularMacrosPorGrama(macros)
        
        const data = {
                calorias: Number((macrosPorGrama.calorias*quantGramas).toFixed(2)),
                proteina: Number((macrosPorGrama.proteina*quantGramas).toFixed(2)),
                gordura: Number((macrosPorGrama.gordura*quantGramas).toFixed(2)),
                carboidrato: Number((macrosPorGrama.carboidrato*quantGramas).toFixed(2))
        }

        const usuarioAtualizado = await prisma.user.update({
            where: { id: idUser },
            data: {
                caloriasDoDia: { increment: data.calorias },
                proteinasDoDia: { increment: data.proteina },
                gordurasDoDia: { increment: data.gordura },
                carboidratosDoDia: { increment: data.carboidrato }
            },
        });

        const verificacao = await dailyServices.verificarMacrosDiarios(idUser)


    return res.status(200).json({user: usuarioAtualizado, verificacao: verificacao})
    
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor"})
    }
}

exports.zerarRefeicao = async (req,res) => {

    try{
    const idUser = Number(req.body.idUser)
    const usuarioAtualizado = await prisma.user.update({
            where: { id: idUser },
            data: {
                caloriasDoDia: 0,
                proteinasDoDia: 0,
                gordurasDoDia: 0,
                carboidratosDoDia: 0
            },
        });
        return res.status(200).json({message: "Zerou!", data: usuarioAtualizado})
    } catch (error){
        return res.status(500).json({error: "Erro interno do servidor"})
    }
}