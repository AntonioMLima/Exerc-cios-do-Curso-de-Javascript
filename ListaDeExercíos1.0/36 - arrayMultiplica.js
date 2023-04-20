const multiplicaElelemento = (vetorInteiros, multiplicador) => {
    let vetorMultiplcado = []
    for (i in vetorInteiros){
        let multiplicado = vetorInteiros[i] * multiplicador
        vetorMultiplcado.push(multiplicado)
    }
    return console.log(vetorMultiplcado)
}

multiplicaElelemento([1, 2, 3, 4, 5], 3)


const multiplicaElelementoMaior5 = (vetorInteiro5, multiplicador5) => {
    let vetorMultiplcado5 = []
    for (i in vetorInteiro5){
        if (multiplicador5 >= 5){
            let multiplicado5 = vetorInteiro5[i] * multiplicador5
            vetorMultiplcado5.push(multiplicado5) 
        } 
        
    }
    return console.log(vetorMultiplcado5)
}

multiplicaElelementoMaior5([1, 2, 3, 4, 5], 5)
