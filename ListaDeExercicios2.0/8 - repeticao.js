function repeat(elemento, repetições){
    let arrayFinal = []
    for (let i = 0; i < repetições; i++){
        arrayFinal.push(elemento)
    }

    return arrayFinal
}

console.log(repeat('code', 2))
console.log(repeat(7, 3))