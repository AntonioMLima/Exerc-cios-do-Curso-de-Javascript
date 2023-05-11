function myobject(){}

console.log(myobject.prototype)

const obj1 = new myobject
const obj2 = new myobject
console.log(obj1.__proto__ === obj2.__proto__)
//objetos diferentes instanciados a partir de uma mesma função construtora possuem o mesmo pai

console.log(myobject.prototype === obj1.__proto__) //obj.__proto__ é igual function.prototype

myobject.prototype.nome = 'Anônimo'
myobject.prototype.fale = function(){
    console.log(`My name is ${this.nome}`)
}
//atributos disponiveis em todos os objetos instanciados

obj1.fale()
obj2.nome = 'Leandro' //sobrescreveu

obj2.fale()

const obj3 = {}
obj3.__proto__ = myobject.prototype //atribuindo manualmente o prototipo de obj3
obj3.nome = 'OBJ3'
obj3.fale() // acesso aos atributos do protótipo

//Algumas curiosidades...

console.log((new myobject).__proto__ === myobject.prototype)
//objetos instanciados possuem como protótipo a função construra.prototype

console.log(myobject.__proto__ === Function.prototype)
//além da função ter um protótipo, ela tbm possui um atributo para seu protótipo que é fuction.prototype

console.log(Function.prototype.__proto__ === Object.prototype)
//O protótipo do protótipo de uma função aponta para Object.prototype

console.log(Object.prototype.__proto__ === null)
//retorna null, O pai de todos