const notas = [5.6, 3.6, 8.9, 2.0, 6.7] //Arrays servem agrupar elementos
console.log(notas[0], notas[3])
console.log(notas[5]) //retorna o valor undefined em vez de um erro

notas[5] = 10 // é possível adicionar valores nas arrays
console.log(notas[5])
notas[10] = 4 /*é possível adicionar valores em indices
                muito altos, deixando espaços vázios nas arrays*/
//console.log(notas)


//console.log(notas.length) //retorna o tamanho da array

notas.push({id: 3}, false, null, 'teste') //adiciona valores às arrays
//console.log(notas) //misturar dados não é uma boa prática

console.log(notas.pop()) //exclui o último elemento
delete notas[0] // exclui o valor do indice 0
console.log(notas)

console.log(typeof notas) //array é do tipo object