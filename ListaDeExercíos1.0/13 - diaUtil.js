function diaUtil(dia) {
    switch(dia){
        case 2: case 3: case 4: case 5: case 6:
            console.log('Hoje é um dia útil.')
            break
        case 1: case 7:
            console.log('Hoje não é um dia útil')
            break
        default:
            console.log('Dia inválido')
    }
}

diaUtil(8)
diaUtil(5)
diaUtil(1)