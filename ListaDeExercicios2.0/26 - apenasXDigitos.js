function onlyXdigits(arrayNums, digito){
    const filtraDig = e => e.toString().length === digito
    const arrayXDigitos = arrayNums.filter(filtraDig)
    
    return console.log(arrayXDigitos)
}

a = [38, 2, 365, 10, 125, 11]
b = [5, 9, 1 , 125, 11]
onlyXdigits(a, 2)
onlyXdigits(b, 1)