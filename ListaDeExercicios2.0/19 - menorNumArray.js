function menorNumArray(array){
    let menor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (menor > array[i]){
            menor = array[i]
        }
    }
    return menor
}

a = [10, 5, 35, 65]
b = [5, -15, 50, 3]

console.log(menorNumArray(a))
console.log(menorNumArray(b))