const soma = function(x, y){
    return x + y
}


const imprima = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprima(6, 8)
imprima(6, 4, function(x, y){
    return x - y
})
imprima(4, 7, (x, y) => x * y) //arrow sempr e vai ser uma função anonima

const person = {
    speak: function(){
        console.log('OLA!!')
    }
}

person.speak()
