const { calculadoraDeMacros } = require('../../services/macrosServices');

describe('calculadoraDeMacros', () => {
  
  test('deve calcular corretamente para um homem em Bulking', () => {
    const dados = {
      peso: 80,
      altura: 180,
      idade: 25,
      sexo: "M",
      atividade: 2,
      balancoCalorico: 500,
      alvo: "Bulking"
    };

    const resultado = calculadoraDeMacros(dados);

    expect(resultado.tmb).toBe(1805);
    expect(resultado.tdee).toBe(2797.75);
    expect(resultado.caloriasTotais).toBe(3297.75);
    expect(resultado.proteinas).toBe(160);
    expect(resultado.gorduras).toBe(80);
    expect(resultado.carboidratos).toBe(484.44);
  });

  test('deve calcular corretamente para uma mulher em Cutting (não-Bulking)', () => {
    const dados = {
      peso: 60,
      altura: 160,
      idade: 30,
      sexo: "F",
      atividade: 1,
      balancoCalorico: -300,
      alvo: "Cutting"
    };

    const resultado = calculadoraDeMacros(dados);

    expect(resultado.tmb).toBe(1289);
    expect(resultado.proteinas).toBe(132);
    expect(resultado.gorduras).toBe(48);
  });

  test('não deve permitir carboidratos negativos', () => {
    const dados = {
      peso: 100,
      altura: 150,
      idade: 50,
      sexo: "M",
      atividade: 0,
      balancoCalorico: -2000,
      alvo: "Cutting"
    };

    const resultado = calculadoraDeMacros(dados);
    expect(resultado.carboidratos).toBe(0);
  });
});