const familia = [{
    nome: 'Antonio',
    idade: 18,
    trabalha: false
},{
    nome: 'Angelo',
    idade: 20,
    trabalha: true
},{
    nome: 'Cristiane',
    idade: 45,
    trabalha: true
},{
    nome: 'Genildo',
    idade: 43,
    trabalha: true
}]

console.log(familia.filter((e) => {
    return e.idade > 40
})) //false: elemento não está presente no array final, true: elemente presente no elemento final

const trabalhadoresEVelhos = familia.filter((e) => {
    return e.idade > 40 && e.trabalha 
}) 
console.log(trabalhadoresEVelhos)