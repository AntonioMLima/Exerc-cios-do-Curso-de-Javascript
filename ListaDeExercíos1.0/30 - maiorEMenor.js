MM =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

const maiorEmenor = vetor => {
    let maior
    let menor
    for (i in vetor){
        if (i == 0){
            maior = vetor[i]
            menor = vetor[i]
        } else{
            if (maior < vetor[i]){
                maior = vetor[i]
            } if (menor > vetor[i]) {
                menor = vetor[i]
            }
        }
    } 
    return console.log(`Maior número: ${maior}\nMenor número: ${menor}`)


}

maiorEmenor(MM)