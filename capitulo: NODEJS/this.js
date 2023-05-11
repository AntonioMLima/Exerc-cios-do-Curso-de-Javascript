console.log(this === global) //falso, this aponta para module.exports

console.log(this === module) // this é a exata referência de module.exports



console.log(this === module.exports) 
console.log(this === exports)


function logThat() {
    console.log('In a function...')
    console.log(this === exports) //this não é igual a exports quando está dentro de uma função
    console.log(this === module.exports)


    console.log(this === global) //surpreendentemente, this dentro de um função aponta para global

    this.danger = 'String dentro do objeto global' //visível fora do módulo
}

logThat()