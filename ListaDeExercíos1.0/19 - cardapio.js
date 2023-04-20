const pedido = (codigo, quantidade) => {
    switch(codigo){
        case 100:
            return console.log(`${quantidade} cachorro(s) quentes(s): R$${(3*quantidade).toFixed(2)}`)
        case 200:
            return console.log(`${quantidade} hamburguer(es) simples: R$${(4*quantidade).toFixed(2)}`)
        case 300:
            return console.log(`${quantidade} cheeseburguer(s): R$${(5.5*quantidade).toFixed(2)}`)
        case 400:
            return console.log(`${quantidade} Bauru(s): R$${(7.5*quantidade).toFixed(2)}`)
        case 500:
            return console.log(`${quantidade} refrigerante(s): R$${(3.5*quantidade).toFixed(2)}`)
        case 600:
            return console.log(`${quantidade} suco(s): R$${(2.8*quantidade).toFixed(2)}`)
        default:
            return console.log('Código de produto inválido')
    }
}
pedido(100, 3)
pedido(200, 5)
pedido(300, 2)
pedido(400, 3)
pedido(500, 2)
pedido(600, 2)
pedido(700, 5)