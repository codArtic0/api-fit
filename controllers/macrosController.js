const macroService = require('../services/macrosServices');

exports.calcularMacros = (req, res) => {
  const { peso, altura, idade, sexo, atividade, balancoCalorico, alvo } = req.body;

  if (!peso || !altura || !idade || !sexo || atividade === undefined) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios" });
  }

  const dados = {
    peso: Number(peso),
    altura: Number(altura),
    idade: Number(idade),
    sexo: String(sexo).toUpperCase(),
    atividade: Number(atividade),
    balancoCalorico: Number(balancoCalorico || 0),
    alvo: String(alvo)
  };

  if (dados.sexo !== 'M' && dados.sexo !== 'F') {
    return res.status(400).json({ error: "Sexo deve ser M ou F" });
  }

  if (dados.atividade < 0 || dados.atividade > 4) {
    return res.status(400).json({ error: "Atividade deve ser entre 0 e 4" });
  }

  try {
    const resultados = macroService.calculadoraDeMacros(dados);
    
    return res.status(200).json(resultados);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao calcular macros" });
  }
};