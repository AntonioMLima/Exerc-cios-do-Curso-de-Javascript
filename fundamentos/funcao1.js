//função sem retorno
function imprimaSoma(a, b) { //função recebe a e b, soma e impreme
    console.log(a + b)
}

imprimaSoma(2, 7)
imprimaSoma(2) //valor int + undefined = NaN
imprimaSoma(2, 6, 4, 2) //soma apenas o dois primeiros valores

//função com retorno
function sum(a = 0, b = 0){
    return a + b
}

console.log(sum(2, 5)) //retorna soma de a + b
console.log(sum(4))
