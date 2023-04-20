const quantidadeCedulas = valor => {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0 
    let nota1 = 0
    while (valor != 0){
        if (valor >= 100){
            nota100++
            valor -= 100
        } else if (valor >= 50){
            nota50++
            valor -= 50
        } else if (valor >= 10){
            nota10++
            valor -= 10
        } else if (valor >= 5){
            nota5++
            valor -= 5
        } else if(valor >= 1){
            nota1++
            valor -= 1
        }
    }
     const notaUsadas = {
        'Nota(s) de 100': nota100,
        'Nota(s) de 50': nota50,
        'Nota(s) de 10': nota10,
        'Nota(s) de 5': nota5,
        'Nota(s) de 1': nota1
     }
    for (tipoNota in notaUsadas){
        if (notaUsadas[tipoNota] != 0){
            console.log(`${tipoNota} : ${notaUsadas[tipoNota]}`)
        }
    }
}


quantidadeCedulas(153)
quantidadeCedulas(40)
quantidadeCedulas(4563)

