const aposentados = [
    {nome: 'Evaldo', idade: 67, fumante: true},
    {nome: 'Isabel', idade: 70, fumante: true},
    {nome: 'Jorge', idade: 65, fumante: false},
    {nome: 'Rosane', idade: 75, fumante: false}
]

// Abordagem Imperativa 
let total1 = 0
for (let i = 0; i < aposentados.length; i++){
    total1 += aposentados[i].idade
}

console.log(total1 / aposentados.length)

/*  - faz tudo ao mesmo tempo
    - menos reuso
    - se preucupa mais como algo vai ser feito 
*/



// Abordagem declarativa
const getIdade = aposentado => aposentado.idade
const sum = (total, atual) => total + atual
const media = (soma) => soma / aposentados.length
const total2 = aposentados.map(getIdade).reduce(sum)
console.log(media(total2))

/*  - se preocupa mais com o que tem que ser feito 
    - reuso de código 
    - detalhes internalizados 
    - abordagem bem mais interessante  
*/

