const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //acessa o prototipo do objeto/ objeto pai

console.log(ferrari.__proto__ === Object.prototype) // toda função tem atributo prototype

console.log(volvo.__proto__ === Object.prototype) //objeto pai padrão?

console.log(Object.prototype.__proto__ === null) //não há nenhum objeto acima na hierarquia 

function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(myObject.prototype)
