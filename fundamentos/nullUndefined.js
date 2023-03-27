let valor //variavel não incializada, apenas declarada
console.log(valor) //retorna o valor undefined
//console.log(valor2) variável não declarada gera um erro

valor = null //variàvel que não aponta para nenhum endereço na memória, ausência de valor
console.log(valor) //null é usado para 'zerar' o valor de uma variável
//console.log(valor.toString()) acessar o valor de uma variável nula ou underfined gera erro

const produto = {}
console.log(produto.preco) //retorna undefined

produto.preco = 4.70
console.log(produto)

produto.preco = undefined // evitar atribuir este valor
delete produto.preco //forma correta de excluir o atributo de um objeto

produto.preco = null // sem preço