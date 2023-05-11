const selecao = ['Neymar', 'Thiago Silva', 'Vinicius Junior', 'Fred', 'Casemiro', 'Pombo']

selecao.pop()  //richarlison lesionado(exclui ultima posição)
//console.log(selecao)

selecao.push('Daniel Alves') //convocado(adiciona o elemento na ultima posição)
//console.log(selecao)

selecao.shift() // Neymar lesionado(exclui o primeiro elemento)
//console.log(selecao)

selecao.unshift('Romário') //tira o homem da aposentadoria(adiciona o elemento na primeira posição)
//console.log(selecao)


// splice para adicionar e remover elementos 

//adicionar
selecao.splice(2, 0, 'Pelé', 'Richarlison') //adiciona dois elemento a partir do indice 2
//console.log(selecao)

//remover
selecao.splice(4, 2) //remove 2 elementos a partir do indice 4
console.log(selecao)

// slice para 'pegar um 'pedaço' de uma array, gera um novo array

const somePlayers1 = selecao.slice(2) // nova array com elementos a partir do indice 2
//console.log(somePlayers1)

const somePlayers2 = selecao.slice(1, 4) //a partir do elemento 1 até o 3
console.log(somePlayers2)
