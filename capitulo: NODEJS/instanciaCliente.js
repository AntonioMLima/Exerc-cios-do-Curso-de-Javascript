const conteA = require('./instanciaUnica')
const conteB = require('./instanciaUnica') //retorna a mesma instância

const conteC = require('./instanciaNova')() // retorna uma função factory, () -> acesso ao objeto
const conteD = require('./instanciaNova')()

conteA.aumentar()
conteA.aumentar()
console.log(conteB.valor) //mudou a constante B, mesma instância

conteC.aumentar()
conteC.aumentar()
console.log(conteD.valor) //não influenciou a constante D, instâncias diferentes