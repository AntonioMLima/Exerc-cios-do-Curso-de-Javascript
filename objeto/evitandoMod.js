// Object.preventExtensions - não permite a adição de atributos, apenas permite a deleção dos mesmos

const numMegaSena = Object.preventExtensions({
    numOne: 56,
    numTwo: 43,
    numThree: 69,
    numFour: 24,
    numFive: 71,
    numSix: 55
})

console.log('Extensível:', Object.isExtensible(numMegaSena)) //é possível adicionar atributos? 

numMegaSena.numOne = 48 //ainda é possível modificar os atributos
numMegaSena.numFive = 78
delete numMegaSena.numTwo
numMegaSena.sorteado = 'Antonio' //não surte efeito no objeto
console.log(numMegaSena)

// Objetct.seal - ao selar um objeto não é possível excluir e nem adicionar atributos
const loja = {cnpj: 5467784, endereco: {rua: '1', logradouro: '666'}}
Object.seal(loja)
console.log('Selado:', Object.isSealed(loja))
loja.cnpj = 6557889
loja.lucro = 20789
delete loja.endereco
console.log(loja)

//Object,freeze: seal + valores const