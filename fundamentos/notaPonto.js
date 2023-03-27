console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2' //equivalentes

console.log(obj1.nome)

function obj2(nome){
    this.nome = nome    //'this' torna a função pública
    this.exec = function(){
        console.log('Executando....')
    }
}

const obj3 = new obj2('Cadeira')
const obj4 = new obj2('Mesa')
console.log(obj3.nome, obj4.nome)
obj3.exec()

//ponto acesso os membros de objeto ou função