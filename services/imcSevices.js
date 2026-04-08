exports.calculadoraDeIMC = (dados) => {
    const peso = dados.peso
    const altura = dados.altura
    const imc = peso/(altura*altura)

    return imc
}