const pesoAlunos = [55.6, 98.3, 100, 120, 45.3, 99]

pesoAlunos.forEach((elemento, indice) => console.log(`${indice+1}: ${elemento}`))
//primeiro parametro da callBack é o elemento e o segundo é o indice

//forEach é uma função que tem como parametro uma função callBack para todos os elementos da Array

pesoAlunos.forEach(peso => console.log(peso))
//apenas o elemento será mostrado no console

const exibaPesos = (peso, indice, Array) => console.log(indice, peso, Array)
//terceiro parâmetro é a própria array que esta sendo percorrida

pesoAlunos.forEach(exibaPesos) // função callBack armazenada numa variável