function impares(start = 0, end= 100){
    if (start > end){
        [start, end] = [end, start]
    }
    for (let i = start; i <= end; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}

impares(2, 100)
impares(100, 2)

