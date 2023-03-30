// recurso novo JS

const pessoa = {
    nome: 'Antonio',
    idade: 18,
    endereco: {
        logradouro: 'Avenida Tranquedo Neves 1084',
        numero: 1084
    }
}

const { idade, nome } = pessoa
console.log(nome, idade) //idade e nome ficam disponíveis como variáveis

const {nome: n, idade: i} = pessoa 
console.log(n, i) //cria variável n e i com os valores de nome e idade

const{sobrenome, malHumorado = true} = pessoa 
console.log(sobrenome, malHumorado)

const{ endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) //apenas cria essas variáveis


