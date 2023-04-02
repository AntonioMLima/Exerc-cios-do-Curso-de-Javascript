const imprimaOResultado = function(nota){
    if(nota >= 7){
        console.log(`Sua nota é ${nota}, você está aprovado.`)
    } else {
        console.log(`Sua nota é ${nota}, você está reprovado.`)
    }
}

imprimaOResultado(10)
imprimaOResultado(4)