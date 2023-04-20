const ArredondaNotaEClassi = (nota) => {
    let situacao
    if (nota < 0 || nota > 100){
        return console.log('Nota inválida')
    }else{


    let notaArredondada = nota
    while (notaArredondada % 5 != 0){
        notaArredondada++
    }
    if ((notaArredondada - nota) < 3 && nota >= 38){
        nota = notaArredondada
    }
    
    
    if (nota < 40){
        situacao = 'Reprovado'
    } else {
        situacao = 'Aprovado'
    }
}
    return console.log(`nota: ${nota}, situação: ${situacao}`)
}

ArredondaNotaEClassi(87)
ArredondaNotaEClassi(100)
ArredondaNotaEClassi(30)
ArredondaNotaEClassi(38)
ArredondaNotaEClassi(88)
ArredondaNotaEClassi(61)


