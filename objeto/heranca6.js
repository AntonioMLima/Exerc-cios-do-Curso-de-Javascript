function video(nome, url) {
    this.nome = nome
    this.url = url
}

const video1 = new video('Matemática Discreta', 2233)
const video2 = new video('Algoritmo e Lógica de Programação', 4455)
console.log(video1, video2)
//new cria um novo objeto e faz com que o protótipo do objeto criado aponte para a função.prototype


//Simulando o operador new
function novo(fc, ...params){
    const obj = {}
    obj.__proto__ = fc.prototype
    fc.apply(obj, params)
    return obj
}
//... -> recebe um conjunto de parametros e concatena tudo numa Array

const video3 = novo(video, 'Arquitetura e Organização de Computadores', 6677)
const video4 = novo(video, 'Programação em Microinformática', 8899)
console.log(video3, video4)