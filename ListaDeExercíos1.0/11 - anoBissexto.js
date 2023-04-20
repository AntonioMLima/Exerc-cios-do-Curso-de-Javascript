const AnoBissexto = ano => {
    if (ano % 4 != 0 || ano <= 0){
        return false
    } else if (ano % 100 == 0 && ano % 400 != 0 || ano <= 0){
        return false
    } else{
        return true
    }
    }




console.log(AnoBissexto(0))
console.log(AnoBissexto(4))
console.log(AnoBissexto(100))
console.log(AnoBissexto(400))
console.log(AnoBissexto(800))
console.log(AnoBissexto(2020))
console.log(AnoBissexto(2021))


