function divisao(dividendo, divisor){
    const resultado = dividendo / divisor
    const resto = dividendo % divisor
    return console.log(`Resultado: ${Math.floor(resultado)}.\nResto: ${resto}.`)
}

divisao(10, 4)

