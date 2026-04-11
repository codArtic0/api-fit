const prisma = require("../lib/prisma")

exports.verificarMacrosDiarios = async (idUser) =>{
    const batidos = {}
    const user = await prisma.user.findFirst({
        where: {
            id: idUser
        }})

    if (user.caloriasDoDia >= user.calorias){
        batidos.calorias = ("Bateu calorias!")
    }
    if (user.proteinasDoDia >= user.proteinas){
        batidos.proteinas = ("Bateu proteinas!")
    }
    if (user.carboidratosDoDia >= user.carboidratos){
        batidos.carboidratos = ("Bateu carboidratos!")
    }
    if (user.gordurasDoDia >= user.gorduras){
        batidos.gorduras = ("Bateu gorduras!")
    }

    return batidos
}