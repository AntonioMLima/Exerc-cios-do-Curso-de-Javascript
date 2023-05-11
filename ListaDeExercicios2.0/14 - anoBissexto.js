function isBissexto(ano){
    let resultado = false
    if (ano % 4 == 0){
        resultado = true
        if (ano % 100 == 0){
            resultado = false
            if (ano % 400 == 0){
                resultado = true
            }
        }
    }
    return resultado
}

console.log(isBissexto(0))
console.log(isBissexto(4))
console.log(isBissexto(100))
console.log(isBissexto(400))
console.log(isBissexto(800))
console.log(isBissexto(2020))
console.log(isBissexto(2021))

