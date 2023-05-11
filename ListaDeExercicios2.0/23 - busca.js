function busquePor(palavra, arrayBusca){
    let arrayFinal = []
    for (let i = 0; i < arrayBusca.length; i++){
        if (arrayBusca[i].search(palavra) != -1){
            arrayFinal.push(arrayBusca[i])
        }
    }
    return console.log(arrayFinal)
}

a = ['programação', 'mobile', 'profissional']
b = ['javascript', 'java', 'c++']

busquePor('pro', a)
busquePor('python', b)