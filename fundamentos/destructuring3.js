function aleatorio({min = 0, max = 100}){ //valor padrão
    const valor = Math.random() * (max-min) + min  
    return Math.floor(valor)
}

const obj = {max: 50}
console.log(aleatorio(obj))
console.log(aleatorio({}))

