function Mais(rep){
    let string = []
    for (let i = 0; i < rep; i++){
        string.push('+')
    }

    return string.join('')
}

console.log(Mais(2))
console.log(Mais(4))

