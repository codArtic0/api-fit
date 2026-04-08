const { calculadoraDeIMC } = require("../services/imcSevices");

exports.calcularIMC = (req, res) => {
  const { peso, altura } = req.body
  
  if (!peso || !altura) {
    return res.status(400).json({error: "Preencha todos os campos"})
  }

  try{

    const { peso, altura } = req.body;

    if (!peso || !altura) {
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios" });
    }

    const dados = {
      peso: Number(peso),
      altura: Number(altura)
    };

    const imc = calculadoraDeIMC(dados)
    let legenda

    if (imc < 18.5){
      legenda = "magreza"
    }

    else if (imc < 24.9){
      legenda = "normal"
    }

    else if (imc < 29.9){
      legenda = "sobrepeso"
    }

    else{
      legenda = "obesidade"
    }

    return res.status(200).json({
      imc: imc,
      legenda: legenda
    })
  } catch(error){
    return res.status(500).json({error: "Erro interno do servidor"})
  }
}

