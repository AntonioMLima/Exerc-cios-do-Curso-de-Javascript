const megaSena = [43, 77, 4, 97, 5, 2]
//map serve para gerar um array de tamanho igual, mas com elementos diferentes

//map pode ser entendido também como um for com propósito

//map modifica elementos do array original

let megaSenaRoubada = megaSena.map(function(e) {
    return e*2 //o retorno será transformado em um elemento
})
//retornou uma Array de tamanho igual com cada elemento multiplicado por 2


console.log(megaSenaRoubada)

const soma3 = (e) => e+3
const quadrado = (e) => e**2
const money = (e) => `R$${parseFloat(e).toFixed(2).replace('.', ',')}` //substitua . por ,

const resultado = megaSena.map(soma3).map(quadrado).map(money)

console.log(resultado)


