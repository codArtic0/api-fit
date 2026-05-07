const { calculadoraDeIMC } = require("../services/imcSevices");
const { calculadoraDeMacros } = require("../services/macrosServices");
const { encontrarUsuario, loginUsuario, hashSenha } = require("../services/userServices")
const prisma = require('../lib/prisma');

exports.createUser = async (req, res) => {
  try {
    const { nome, peso, altura, idade, genero, atividade, balancoCalorico, alvo, senha } = req.body;

    if (!nome || !peso || !altura || !idade || !genero || atividade === undefined || !balancoCalorico || !alvo || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios" });
    }

    const dadosIMC = {
      peso: Number(peso),
      altura: Number(altura)
    };
    const imc = calculadoraDeIMC(dadosIMC);

    const dadosMacros = {
      peso: dadosIMC.peso,
      altura: dadosIMC.altura,
      idade: Number(idade),
      genero: String(genero).toUpperCase(),
      atividade: Number(atividade),
      balancoCalorico: Number(balancoCalorico),
      alvo: String(alvo).toUpperCase()
    };

    const macros = calculadoraDeMacros(dadosMacros);

    const senhaHasheada = await hashSenha(senha);

    const dadosUser = {
      nome,
      senha: senhaHasheada,
      peso: dadosIMC.peso,
      altura: dadosIMC.altura,
      imc,
      idade: dadosMacros.idade,
      genero: dadosMacros.genero,
      atividade: dadosMacros.atividade,
      balancoCalorico: dadosMacros.balancoCalorico,
      alvo: dadosMacros.alvo,
      tmb: macros.tmb,
      tdee: macros.tdee,
      calorias: macros.caloriasTotais,
      proteinas: macros.proteinas,
      gorduras: macros.gorduras,
      carboidratos: macros.carboidratos,
      caloriasDoDia: 0,
      proteinasDoDia: 0,
      gordurasDoDia: 0,
      carboidratosDoDia: 0
    };

    const user = await prisma.user.create({ data: dadosUser });

    return res.status(201).json(user);

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Erro interno ao processar os dados." });
  }
}

exports.getUser = async(req, res) => {
  try {
    const id = req.usuario.id || Number(req.query.id)
    
    if (!id) {
      return res.status(400).json({ error: "Informe o ID do usuario" });
    }
    
    const user = await encontrarUsuario(id);
    if (user){
      return res.status(200).json(user)
    }
    else{
      return res.status(404).json({error: "Não encontrado"})
    }
  } catch (error) {
    return res.status(500).json({error: "Erro interno de servidor"})
  }

}

exports.login = async (req, res) => {
  try {
    const { id, senha } = req.body

    if (!id || !senha) {
      return res.status(400).json({ error: "Id e senha são obrigatórios" })
    }

    const resultado = await loginUsuario(Number(id), senha)

    if (resultado.sucesso) {
      return res.status(200).json(resultado)
    } else {
      return res.status(401).json(resultado)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Erro interno ao fazer login" })
  }
}