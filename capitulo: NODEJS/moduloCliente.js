//como importar algo:


const moduloA = require('./moduloA') //  ./ indica que o módulo está presente dentro do sistema
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.tchau)
console.log(moduloA.bemVindo)

console.log(moduloB)
console.log(moduloB.educacao())

//objetos estão armazenados em 'this'