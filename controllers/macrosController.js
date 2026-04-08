exports.calcularMacros = (req,res) => {
  const {peso, altura, idade, sexo, atividade, balancoCalorico, alvo} = req.body

  if (!peso || !altura || !idade || !sexo || !atividade ){
    return res.status(400).json({error: "Preencha todos os campos"})
  }

  if (sexo != 'M' && sexo != "F"){
    return res.status(400).json({error: "Sexo só pode ser M ou F"})
  }

  if (atividade < 0 || atividade > 4){
    return res.status(400).json({error: "Atividade deve ser entre 0 e 4"})
  }

  if (alvo != "Bulking" && alvo != "Cutting"){
    return res.status(400).json({error: "Alvos devem ser 'Bulking' ou 'Cutting' "})
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
    const tdee = tmb * fatorAtividade[atividade]

    let proteinas;
    let gorduras;
    let carboidratos

    if (alvo == "Bulking"){
      proteinas = peso * 2
      gorduras = peso * 1
    }

    else{
      proteinas = peso * 2.2
      gorduras = peso * 0.8
    }
    
    const caloriasTotais = tdee + balancoCalorico
    carboidratos = (caloriasTotais - (proteinas * 4 + gorduras * 9)) / 4

    if (carboidratos < 0){
      carboidratos = 0
    }

    return res.status(200).json({
      tmb: Number(tmb.toFixed(2)),
      tdee: Number(tdee.toFixed(2)),
      caloriasTotais: Number(caloriasTotais.toFixed(2)),
      proteinas: Number(proteinas.toFixed(2)),
      gorduras: Number(gorduras.toFixed(2)),
      carboidratos: Number(carboidratos.toFixed(2))
    })
  } catch (error){
    return res.status(500).json({error: "Erro interno do servidor"})
  }
}