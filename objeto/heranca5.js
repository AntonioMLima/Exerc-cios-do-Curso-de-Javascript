console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Sendo ambas as três funções, elas possuem o atributo prototype

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}
//array possui a função split(cria uma array), reverse(inverte arrays), e join(junta tudo numa string)

console.log('SOCORRAM ME SUBI NO ONIBUS EM MARROCOS'.reverse())

Array.prototype.first = function() {
    return this[0]
} //this é a Array passada

console.log([4, 7, 2].first())


String.prototype.toString = function(){
    return 'Do not do it'
} //sobrescrever funções ja existentes não é recomendado, pois pode gerar imprevisibilidade 

console.log('Does not work anymore'.reverse())
//efeito colateral