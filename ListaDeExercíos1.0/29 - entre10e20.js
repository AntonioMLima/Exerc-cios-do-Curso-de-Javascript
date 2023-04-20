const entreDezEVinte = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

const numEntre10e20 = vetor => {
    let dentro = 0
    let fora = 0
    const entreIntervalo = num => num >= 10 && num <= 20 ? dentro++ : fora++
    for (i in vetor){
        entreIntervalo(vetor[i])
    }
    return console.log(`Entre 10 e 20: ${dentro}\nFora do intervalo: ${fora}`)
}

numEntre10e20(entreDezEVinte)