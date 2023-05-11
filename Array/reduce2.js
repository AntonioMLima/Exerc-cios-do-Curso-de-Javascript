const candidatos = [
    {nome: 'Andre', Afrodescendente: false, idade: 20},
    {nome: 'Rose', Afrodescendente: true, idade: 55},
    {nome: 'Maria', Afrodescendente: true, idade: 50},
    {nome: 'João', Afrodescendente: false, idade: 18}
]

const afro = candidatos.map(a => a.Afrodescendente)

//desafio 1
const todosAfros = afro.reduce((aluno1, aluno2) => aluno1 && aluno2)
console.log(todosAfros)

//desafio 2
const algumAfro = afro.reduce((aluno1, aluno2) => aluno1 || aluno2)
console.log(algumAfro)