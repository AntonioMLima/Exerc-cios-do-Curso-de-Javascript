function apenasNums(array){
    const arrayFinal = array.filter(e => typeof e === 'number')
    return arrayFinal
}


a = ['JavaScript', 1, '3', 'web', 20]
b = ['a', 'c']


console.log(apenasNums(a))
console.log(apenasNums(b))
