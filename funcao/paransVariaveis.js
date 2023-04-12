function some(){
    let some = 0
    for (i in arguments){
        some += arguments[i]
    }
    return some
}

console.log(some())
console.log(some(1, 6))
console.log(some(7.5, 8.6))

console.log(some(7.5, 8.6, 'Contatenou'))
console.log(some('a', 'b', 'c'))