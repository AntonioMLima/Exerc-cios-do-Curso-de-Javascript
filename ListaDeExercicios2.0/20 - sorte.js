function SortearNum(num){
    const numSorte = Math.floor(Math.random() * (11 - 1) + 1)
    if (num == numSorte){
        console.log(`Parábens, o número sorteado foi ${numSorte}`)
    } else {
        console.log(`Que pena! O número sorteado foi ${numSorte}`)
    } 
}

SortearNum(10)