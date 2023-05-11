const candidatos = [
    {nome: 'Andre', Afrodescendente: false, idade: 20},
    {nome: 'Rose', Afrodescendente: true, idade: 55},
    {nome: 'Maria', Afrodescendente: true, idade: 50},
    {nome: 'João', Afrodescendente: false, idade: 18}
]

console.log(candidatos.map(a => a.nome))

const result = candidatos.map(a => a.idade).reduce((acumulador, atual) => acumulador + atual, 0)
/* callback de reduce recebe o primeiro e segundo elemento como primeiros parametros e o resultado se torna
o acumulador na próxima chamada */

/* o acumulador pode ser definido no segundo parametro da função reduce */

console.log(result)
// o resultado foi a soma de todas as idades