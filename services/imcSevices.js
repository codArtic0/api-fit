exports.calculadoraDeIMC = (dados) => {
    const peso = dados.peso
    const altura = dados.altura/100
    const imc = peso/(altura*altura)

    return imc
}