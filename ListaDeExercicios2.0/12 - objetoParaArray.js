function toArray(obj){
    let arrayFinal = []
    for (atributo in obj){
        arrayFinal.push([atributo, obj[atributo]])
    }

    return arrayFinal
}




a = {nome: 'Maria', profissao: 'Desenvolvedora de software'}
b = {code: 1211221, preco: 12000}

console.log(toArray(a))
console.log(toArray(b))
