function second(array){
    const defineMaior = (e1, e2) => e1 > e2 ? e1 : e2 
    const maior = array.reduce(defineMaior)
    delete array[array.indexOf(maior)]
    const segundoMaior = array.reduce(defineMaior)

    return console.log(segundoMaior)
}

const a = [12, 16, 1, 5]
const b = [8, 4, 5, 6]

second(a)
second(b)
