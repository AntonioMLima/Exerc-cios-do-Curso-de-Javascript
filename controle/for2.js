const notas = [6.8, 3.3, 2.9, 9, 8.5]

for(i in notas){
    console.log(`Nota ${Number(i)+1} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Antonio',
    idade: 18,
    altura: 1.67,
    peso: 85
}

for (let atrib in pessoa){ //atributo = chave
    console.log(`${atrib} = ${pessoa[atrib]}`)
}