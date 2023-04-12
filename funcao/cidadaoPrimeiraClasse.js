//declaração de uma função de forma literal.

function funcao1(){}


//uma função recebe parámetros e retorna um valor. Por padrâo retorna o valor undefined

//armazenando em uma variável

const funcao2 = function() {}

//Armazenando em uma array


const array = [function(a, b){ return a + b }, funcao1, funcao2]
console.log(array[0](2, 5))


//Armazenando em um atributo de objeto

const obj = {}
obj.falar = function(){ return 'Me chamou??'}
console.log(obj.falar()) 



//passar função como parámetro

function run(fun){
    fun()
}

run(function (){ console.log('Executeeiii')})

//funções também retornam/contém uma função

function some(a, b){
    return function(c){
        console.log( a + b + c  )
    }
}

some(6, 3)(3)
const noveMais = some(6, 3)
noveMais(6)


