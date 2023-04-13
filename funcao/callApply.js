function getPrice( tax = 0, currency = "R$" ) {
    return `${currency} ${this.preco * (1 - this.desc) * (1 + tax)}`
}


const produto = {
    nome: 'All-In-One',
    preco: 890,
    desc: 0.15,
    getPrice
}

console.log(getPrice())
console.log(produto.getPrice())

const carro = { preco: 49990, desc: 0.20}

console.log(getPrice.call(carro)) //chama a função dentro do contexto carro
console.log(getPrice.apply(carro))

console.log(getPrice.call(carro, 0.17, '$')) //chamando call com parametros 
console.log(getPrice.apply(carro , [0.17, '$'])) //chamando apply com parametros