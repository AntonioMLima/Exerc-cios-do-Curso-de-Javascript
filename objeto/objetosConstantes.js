//person -> 123 -> {...}

const person = {nome : 'Angelo'}
person.nome = 'Antonio' //Não muda a referência da constante
console.log(person.nome)


// pessoa -> 456 -> {...}
//person = {nome: 'Cristiane'} constante pessoa aponte para um novo objeto

Object.freeze(person) //não permite a alteração de nenhum objeto 

person.nome = 'Gustavo'
person.saudacao = 'Ola'
delete person.nome
console.log(person)

const personConstant = Object.freeze({nome: 'João'}) // cria um objeto constante
personConstant.nome = 'Gabriel'
console.log(personConstant)