function somaDeArrays(arrayDeNums){
    const some = (acumulador, atual) => acumulador + atual
    const arraySomada = arrayDeNums.reduce(some)
    return arraySomada 
}

a = [10, 10, 10]
b = [15, 15, 15, 15]

console.log(somaDeArrays(a))
console.log(somaDeArrays(b))