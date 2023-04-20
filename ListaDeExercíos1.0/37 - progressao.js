const progressaoAritmetica = (numTermos, firstTermo, r) => {
    let progressao = 1
    let soma = 0
    while (numTermos != 0){
        console.log(`${progressao}° termo:  ${firstTermo}`)
        soma += firstTermo
        firstTermo += r
        numTermos--
        progressao++
    
    }
    console.log(`Soma: ${soma}`)
}

progressaoAritmetica(10, 10, 15)



const progressaoGeometrica = (numTermos, firstTermo, r) => {
    let progressao = 1
    let soma = 0
    while (numTermos != 0){
        console.log(`${progressao}° termo: ${firstTermo}`)
        soma += firstTermo
        firstTermo *= r
        numTermos--
        progressao++
    }
    console.log(`Soma: ${soma}`)
}

progressaoGeometrica(10, 5, 3)