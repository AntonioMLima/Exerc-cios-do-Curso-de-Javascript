const imprimirResulta = function (nota){
    switch(Math.floor(nota)){
        case 10: 
        case 9:
            console.log('Quadro de honra.')
            break
        case 8: case 7:
            console.log('Aprovado.')
            break
        case 4: case 5: case 6:
            console.log('Recuperação.')
            break
        case 0: case 1: case 2: case 3:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida')
    }  
    console.log()
}

imprimirResulta(10)
imprimirResulta(8.5)
imprimirResulta(4.6)
imprimirResulta(2.2)
imprimirResulta(14)