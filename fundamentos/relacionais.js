console.log('1-', '1' == 1) // '1' é igual a 1
console.log('2-', '1' === 1) //'1' é estritamente igual a 1
console.log('3-', '3' != 3) //'3' é diferente de 3
console.log('4-', '3' !== 3 ) // é estritamente diferente de 3

console.log('5-', 3 < 2)
console.log('6-', 3 > 2)
console.log('7-',3 <= 2)
console.log('8-', 3 >= 2)

const data1 = new Date(0)
const data2 = new Date(0)
console.log('9-', data1 === data2) //apontam para o mesmo lugar na memória?
console.log('10-', data1.getTime() === data2.getTime())

console.log('11-', undefined == null)
console.log('12-', undefined === null)


// '===' é o recomendado