exports.calculadoraDeMacros = (dados) => {
  const { peso, altura, idade, sexo, atividade, balancoCalorico, alvo } = dados;

  let tmb;
  if (sexo === "M") {
    tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
  } else {
    tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
  }

  const fatorAtividade = [1.2, 1.375, 1.55, 1.725, 1.9];
  const tdee = tmb * fatorAtividade[atividade];

  let proteinas, gorduras;

  if (alvo === "Bulking") {
    proteinas = peso * 2;
    gorduras = peso * 1;
  } else {
    proteinas = peso * 2.2;
    gorduras = peso * 0.8;
  }

  const caloriasTotais = tdee + balancoCalorico;
  let carboidratos = (caloriasTotais - (proteinas * 4 + gorduras * 9)) / 4;
  
  if (carboidratos < 0) carboidratos = 0;

  return {
    tmb: Number(tmb.toFixed(2)),
    tdee: Number(tdee.toFixed(2)),
    caloriasTotais: Number(caloriasTotais.toFixed(2)),
    proteinas: Number(proteinas.toFixed(2)),
    gorduras: Number(gorduras.toFixed(2)),
    carboidratos: Number(carboidratos.toFixed(2))
  };
};