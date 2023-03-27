console.log(`a = ${a}`) //variável a declarada, porém sem valor
var a = 3
console.log(`a = ${a}`)
//devido ao hoisting, não ocorre um erro ao chamar uma variável ainda não definida


var b
console.log(`b = ${b}`) //variável a declarada, porém sem valor
b = 3
console.log(`b = ${b}`)
//o efeito de hoisting não ocorre ao declarar uma variável com let
