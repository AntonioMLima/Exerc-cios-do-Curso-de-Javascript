//gerando valores padrao/1

function padrao(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(padrao(), padrao(3), padrao(1, 2, 3), padrao(0, 0, 0))//0 = false

//gerando valores padrao/2/3/4

function standart(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b: 1
    c = isNaN(c) ? 1 : c //forma mais adequada
    return a + b + c
}

console.log(standart(), standart(5), standart(9, 8, 7), standart(0, 0, 0))

//valor padrao es2015

function padrao1(a = 1, b = 1, c = 1){
    return a + b + c 
}

console.log(padrao1(), padrao1(5), padrao1(9, 8, 7), padrao1(0, 0, 0))