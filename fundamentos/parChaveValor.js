// par chave/valor
const saudacao = 'Olá pessoas' //contexto léxico 1

function exec(){
    const saudacao = 'Salvee' //contexto léxico 2
    return saudacao
}

//const saudacao = 'Olá': gera um erro

//objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Antonio',
    idade: 18,
    peso: 85.5,
    endereco: {
        logradouro: 'Avenidade Tranquedo Neves',
        numero: 1084
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)