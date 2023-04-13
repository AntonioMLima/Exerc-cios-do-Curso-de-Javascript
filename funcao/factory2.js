function createProduct(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.5
    }
}

console.log(createProduct('Lápis', 5))