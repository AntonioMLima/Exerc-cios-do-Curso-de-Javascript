function aleatorio([min = 10, max = 100]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(aleatorio([1000]))
console.log(aleatorio([, 11]))
console.log(aleatorio([]))
