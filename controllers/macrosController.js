exports.calcularMacros = (req,res) => {
  const {peso, altura, idade, sexo, atividade, balancoCalorico} = req.body

  if (!peso || !altura || !idade || !sexo || !atividade ){
    return res.status(400).json({error: "Preencha todos os campos"})
  }

  if (sexo != 'M' && sexo != "F"){
    return res.status(400).json({error: "Sexo só pode ser M ou F"})
  }

  if (atividade < 0 || atividade > 4){
    return res.status(400).json({error: "Atividade deve ser entre 0 e 4"})
  }

  try{
    let tmb;
    if (sexo == "M"){
      tmb = Number(((10*peso) + (6.25*altura) - (5*idade) + 5).toFixed(2))
    }
    else{
      tmb = Number(((10*peso) + (6.25*altura) - (5*idade) - 161).toFixed(2))
    }

    const fatorAtividade = [1.2, 1.375, 1.55, 1.725, 1.9]

    const tdee = Number((tmb * fatorAtividade[atividade]).toFixed(2))
    
    const caloriasTotais = Number((tdee + balancoCalorico).toFixed(2))
    const proteinas = Number((peso * 2).toFixed(2))
    const gorduras = Number(peso * 0.8.toFixed(2))
    const carboidratos = Number((((caloriasTotais) - (proteinas * 4 + gorduras * 9)) / 4).toFixed(2))

    return res.status(200).json({
      tmb: tmb,
      tdee: tdee,
      caloriasTotais: caloriasTotais,
      proteinas: proteinas,
      gorduras: gorduras,
      carboidratos: carboidratos
    })
  } catch (error){
    return res.status(500).json({error: "Erro interno do servidor"})
  }
}