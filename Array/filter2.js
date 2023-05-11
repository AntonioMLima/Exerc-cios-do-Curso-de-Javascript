Array.prototype.filter2 = function(callback){
    let arrayRetorno = []
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            arrayRetorno.push(this[i])
        }
    }
    return arrayRetorno
}

arrayTestTest = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log(arrayTestTest.filter2(e => e >= 50))