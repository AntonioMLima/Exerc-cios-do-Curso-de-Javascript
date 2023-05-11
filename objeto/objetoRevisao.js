// coleção dinâmica de pares chave/valor
const produto = new Object //função construtora instanciando um objeto
produto.nome = 'Garrafa'
produto['marca do produto'] = 'Tupperware'
produto.preco = 19.99

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Honda civic',
    valor: 244900,
    proprietario: {
        nome: 'Antonio',
        idade: 18,
        endereco : {
            logradouro: 'RUA 123',
            numero: 321
        }
    },
    condutores: [{
        nome: 'Marcelo',
        idade: 23
    }, {
        nome: 'Jorge',
        idade: 43
    }], 
    calcularValorDoSegura: function(){
        //..
    }
}

carro.proprietario.endereco.numero = 2000
carro['proprietario']['endereco']['logradouro'] = 'Av Ribeira'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSegura

console.log(carro)
console.log(carro.condutores) //é possível acessar chaves inexistentes em qualquer objeto
                              //retorna undefined 

//console.log(carro.condutores.length)
// acessar um atributo de uma chave inexistente gera um erro 