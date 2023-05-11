function conta(carectere, frase){
    let contador = 0
    for (let i = 0; i < frase.length; i++){
        if ( carectere === frase[i]){
            contador += 1
        }
    }

    return contador
}

a = 'A sorte favorece os audazes'
b = 'Conhece-te a ti mesmo'

console.log(conta('r', a))
console.log(conta('c', b))