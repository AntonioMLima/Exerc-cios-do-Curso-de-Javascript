const fatorial = numero => {
    let numFatorial = numero
    if (numero == 0){
        return 1
    }
    while (numero != 1){
        numFatorial *= (numero-1)
        numero-- 
    }
    return numFatorial
}

console.log(fatorial(10))
console.log(fatorial(8)) 