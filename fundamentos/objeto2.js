console.log(typeof Object)
console.log(typeof new Object)

const cliente = function(){}
console.log(typeof cliente)
console.log(typeof new cliente) //retorna um objeto a partir da instância da função

class produto {} // ES 2015 ()
console.log(typeof produto)
console.log(typeof new produto())