const classificaNota = vetorDeNota => {
    for (let i = 0; i < vetorDeNota.length; i++){
        if (vetorDeNota[i] >= 0 && vetorDeNota[i] <= 4.9){
            console.log(`${i+1}° nota: D`)
        } else if(vetorDeNota[i] >= 5 && vetorDeNota[i] <= 6.9){
            console.log(`${i+1}° nota: C`)
        } else if(vetorDeNota[i] >= 7 && vetorDeNota[i] <= 8.9){
            console.log(`${i+1}° nota: B`)
        } else if(vetorDeNota[i] >= 9 && vetorDeNota[i] <= 10){
            console.log(`${i+1}° nota: A`)
        } else {
            console.log(`${i+1} nota: inválida`)
        }
    }
}

const notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
classificaNota(notas)

