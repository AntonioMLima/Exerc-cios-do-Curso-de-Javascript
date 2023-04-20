function ChooseCar(carro){
    switch(carro){
        case 'hatch':
            console.log('Compra realizada.')
            break
        case 'sedan': case 'motocicleta': case 'caminhote':
            console.log('Tem certeza da sua escolha?')
            break
        default:
            console.log('Não trabalhamos com esse tipo de modelo.')
    }
}

ChooseCar('hatch')
ChooseCar('sedan')
ChooseCar('patins')