function contaFrases(frase){
    const fraseArray = frase.split(' ')
    return fraseArray.length
}

console.log(contaFrases('Sou uma frase'))
console.log(contaFrases('Aprender a programar é divertido.'))