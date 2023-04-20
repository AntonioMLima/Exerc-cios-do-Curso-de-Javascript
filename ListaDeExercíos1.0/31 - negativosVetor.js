const Qnegativos = vetor => {
    let negativos = 0
    function contaNegativos(num) {
        if (num < 0){
            return negativos++
        } 
    }

    for (i in vetor){
        contaNegativos(vetor[i])
    }
    return console.log(`Negativos: ${negativos}`)
    
} 
vetorPosAndNeg =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

Qnegativos(vetorPosAndNeg)