console.log(typeof Array,typeof new Array, typeof [])

let aproved = new Array('Antonio', 'Gustavo', 'Fábio') //forma pouco usual de criar array
console.log(aproved)

aproved = ['Antonio', 'Gustavo', 'Miguel'] //notação literal, recomendada
console.log(aproved[0])
console.log(aproved[2])
console.log(aproved[3]) // não possui, retornará undefined

aproved[3] = 'João' //uma forma de adicionar um novo elemento ou substituir um já existente

aproved.push('Tainá') //forma mais adequada de adicionar um elemento
console.log(aproved.length)

aproved[10] = 'Rogério' // todos elementos entre o indice 4 e 10 ficarão vázios e o array terá tamanho 10
console.log(aproved)
console.log(aproved[8] === undefined)

aproved.sort() //organiza de forma alfabética a array, altera o array original
console.log(aproved)

delete aproved[1] //substitui o indice 1 pelo valor undefined, indice 2 continua sendo o mesmo valor

aproved = ['Isabela', 'Leandro', 'Cristiano']
aproved.splice(1, 2, 'elemento1', 'elemento2') //indice, quantidade de elementos excluidos, elementos a serem adicionados
console.log(aproved)
