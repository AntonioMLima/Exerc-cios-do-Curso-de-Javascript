const peso = 1.0
const peso1 = Number('2.6')

console.log(peso, peso1)
console.log(typeof peso,typeof peso1)

console.log(Number.isInteger(peso))
console.log(Number.isInteger(peso1))

const avaliacao = 4.7865
const avaliacao1 = 7.4345

const total = avaliacao * peso + avaliacao1 * peso1
const media = total / (peso+peso1)

console.log(media.toFixed(2)) // limita casas decimais
console.log(media.toString(2)) // converte um número para o sistema binário