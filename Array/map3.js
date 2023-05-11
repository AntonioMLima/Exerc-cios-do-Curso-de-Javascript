Array.prototype.map2 = function(callback){
    const arrayFinal = []
    for (let i = 0; i < this.length; i++){
        let add = callback(this[i], i, this)
        arrayFinal.push(add)
        
    }
    return arrayFinal
    
}

arrayTeste = [1, 2, 3, 4, 5]

mapTeste = arrayTeste.map2(e => e ** 2)

console.log(mapTeste)