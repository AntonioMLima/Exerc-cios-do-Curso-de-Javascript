Array.prototype.reduce2 = function(callback){
    let acumule = this[0]
    for (let i = 1; i < this.length ; i++) {
        acumule = callback(acumule, this[i], i, this)
    }
    return acumule
}


const candidatos = [
    {nome: 'Andre', Afrodescendente: false, idade: 20},
    {nome: 'Rose', Afrodescendente: true, idade: 55},
    {nome: 'Maria', Afrodescendente: true, idade: 50},
    {nome: 'João', Afrodescendente: false, idade: 18}
]

const afro = candidatos.map(a => a.Afrodescendente)

//desafio 1
const todosAfros = afro.reduce2((aluno1, aluno2) => aluno1 && aluno2)
console.log(todosAfros)

//desafio 2
const algumAfro = afro.reduce2((aluno1, aluno2) => aluno1 || aluno2)
console.log(algumAfro)

//reduce possui como principal conceito o de agregar todo o array em apenas um