const mediavet = vetor => {
    let acumule = 0
    let conte = 0
    for (i in vetor){
        acumule += vetor[i]
        conte++
    }
    return console.log(`Média: ${acumule/conte}`)
}

const mediaDe =  [1, 2, 3, 4, 5]

mediavet(mediaDe)