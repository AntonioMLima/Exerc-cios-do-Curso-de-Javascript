let a = 4

global.b = 123
this.c = 456


console.log(this.a) //variavel a não está no escopo global
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) //module.export é um objeto

abc = 123 //varivel no escopo global, não faça