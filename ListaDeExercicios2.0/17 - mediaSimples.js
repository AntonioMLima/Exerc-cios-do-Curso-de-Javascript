function mediaArray(arrayDeNums){
    const total = (acumulador, atual) => acumulador + atual
    const media = totalNums => totalNums/arrayDeNums.length
    const resultado = media(arrayDeNums.reduce(total))

    return resultado
}

a = [0, 10]
b = [1, 2, 3, 4, 5]

console.log(mediaArray(a))
console.log(mediaArray(b))