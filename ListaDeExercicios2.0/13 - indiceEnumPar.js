function indAndElem(array){
    const arrayDePares = array.filter(e => e % 2 == 0 && array.indexOf(e) % 2 == 0 ) 
    return arrayDePares
}


a = [1, 2, 4, 3]
b = [10, 70, 22, 43]

console.log(indAndElem(a))
console.log(indAndElem(b))