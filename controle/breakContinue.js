const nums = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10]

for(n in nums){
    if (n == 5){
        break
    }
    console.log(`${n} = ${nums[n]}`)
}

console.log()

for(y in nums){
    if(y == 5){
        continue //volta para o for, pula um indice, interrompe a repetição atual
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log()

externo: for (a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo //especificando rótulo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Acabou!!')