 //armazanando uma função em uma variável
const printSum = function (a, b){
    console.log(a+b)
}

printSum(4, 7)

//armazenando uma função arrow numa variável
const sum = (a, b) =>{     // => substitui 'function'
    return a + b
}

console.log(sum(4, 7))

//retorno implícito
const sub = (a, b) => a - b //executa uma única sentença de código
console.log(sub(7, 3))