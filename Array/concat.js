const materno = ['Cristiane', 'Margarida', 'Antonio Carlos']
const paterno = ['Genildo', 'Isabel', 'Emanuel']
const todos = materno.concat(paterno, 'Paulo') //método concat junta tudo numa array, não altera array original
console.log(todos)

console.log([].concat(['Antonio', 'Angelo'], [1, 2], [[3, 4]]))