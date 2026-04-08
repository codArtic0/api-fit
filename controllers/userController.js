const { calculadoraDeIMC } = require("../services/imcSevices");
const { calculadoraDeMacros } = require("../services/macrosServices");
const prisma = require('../lib/prisma');

exports.createUser = async (req, res) => {
  try {
    const { nome, peso, altura, idade, sexo, atividade, balancoCalorico, alvo } = req.body;

    if (!nome || !peso || !altura || !idade || !sexo || atividade === undefined || !balancoCalorico || !alvo) {
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios" });
    }

    const dadosIMC = {
      peso: Number(peso),
      altura: Number(altura)
    };
    const imc = calculadoraDeIMC(dadosIMC);
    console.log("IMC:", imc)

    const dadosMacros = {
      peso: dadosIMC.peso,
      altura: dadosIMC.altura,
      idade: Number(idade),
      sexo: String(sexo).toUpperCase(),
      atividade: Number(atividade),
      balancoCalorico: Number(balancoCalorico),
      alvo: String(alvo).toUpperCase()
    };

    const macros = calculadoraDeMacros(dadosMacros);
    console.log("Macros:", macros)

    const dadosUser = {
      nome,
      peso: dadosIMC.peso,
      altura: dadosIMC.altura,
      imc,
      idade: dadosMacros.idade,
      sexo: dadosMacros.sexo,
      atividade: dadosMacros.atividade,
      balancoCalorico: dadosMacros.balancoCalorico,
      alvo: dadosMacros.alvo,
      tmb: macros.tmb,
      tdee: macros.tdee,
      calorias: macros.caloriasTotais,
      proteinas: macros.proteinas,
      gorduras: macros.gorduras,
      carboidratos: macros.carboidratos,
    };

    console.log("DADOS PARA O BANCO:", dadosUser)
    const user = await prisma.user.create({ data: dadosUser });

    return res.status(201).json(user);

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res.status(500).json({ error: "Erro interno ao processar os dados." });
  }
}