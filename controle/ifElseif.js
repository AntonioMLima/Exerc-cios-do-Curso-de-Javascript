Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
 
const imprimeResultado = function (nota){
    if (nota.entre(9, 10)){
        console.log('Quadro de honra.')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado, parabéns')
    } else if(nota.entre(4, 6.99)){
        console.log('Você está de recuperação.')
    } else if(nota.entre(0, 3.99)){
        console.log('Você está reprovado')
    } else{
        console.log('Você inseriu uma nota inválida.')
    }

    console.log('Programa finalizado')
    console.log()
}

imprimeResultado(10)
imprimeResultado(8.6)
imprimeResultado(6.4)
imprimeResultado(3.2)
imprimeResultado(-4)
