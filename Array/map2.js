const littleCars = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const convertedToObject = littleCars.map(e => {
    return JSON.parse(e).preco
})

console.log(convertedToObject)



