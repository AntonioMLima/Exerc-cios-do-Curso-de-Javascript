const person = {
    nome: 'Antonio',
    idade: 18,
    peso: 90
}

console.log(Object.keys(person)) //retorna uma array com as chaves do objeto pessoa

console.log(Object.values(person)) //returna uma array com os valores do objeto pessoa

console.log(Object.entries(person)) //retorna uma array com subarrays para cada par chave-valor

Object.entries(person).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

 // para cada elemento da array gerada(subarrays), retorna o indice 0 e 1


Object.defineProperty(person, 'dataNascimento', {
    enumerable: true, //listável?(.keys, .values)
    writable: false, // aceita modificações? (.freeze)
    value: '22/04/2023' // valor do atributo
}) //define propriedades de um atributo

person.dataNascimento = '01/01/2025'

console.log(person.dataNascimento)
console.log(Object.keys(person))


// Object.assign (ECMAScrpit 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } //atributo a sobrescrito 
const obj = Object.assign(dest, o1, o2) //concatena os objetos o1 e o2 ao objeto dest
console.log(obj)

Object.setPrototypeOf(dest, o1)