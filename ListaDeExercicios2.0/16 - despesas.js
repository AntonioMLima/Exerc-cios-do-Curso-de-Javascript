function depesaTotal(arrayDeProd){
    const todosPrecos = arrayDeProd.map(e => e.preco)
    const precoTotal = todosPrecos.reduce((acumulador, atual) => acumulador+atual)
    return precoTotal.toFixed(2)
}

a = [{nome: 'Jornal Online', categoria: 'Informação', preco: 89.99}, {
    nome: 'Cinema', categoria: 'Entretedimento', preco: 150
}]

b = [{nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},{
    nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90
}]

console.log(depesaTotal(a))
console.log(depesaTotal(b))
