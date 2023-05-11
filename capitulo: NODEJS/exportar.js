console.log(module.exports === this) //this é uma referência para module.exports
console.log(exports === this)

this.a = 1 //referência

module.exports.b = 2 //objeto 'de verdade'

exports.c = 3 //referência
// mesma referência em memória


exports = null //mesmo atribuindo o valor nulo, module.exports não é alterado

console.log(module.exports)

exports = {
    nome: 'Antonio'
} //module.exports continua o mesmo, referencia de memória de exports alterada

module.exports = { fechado: true } //usar ao adicionar um novo objeto para exportar

