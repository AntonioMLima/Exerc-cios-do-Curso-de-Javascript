function temosFrutas(fruta){
    switch(fruta){
        case 'maca':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está são 4 reais o quilo')
            break
        default:
            console.log('Erro fruta inválida.')
    }
}
temosFrutas('maca')
temosFrutas('kiwi')
temosFrutas('melancia')
temosFrutas('laranja')

