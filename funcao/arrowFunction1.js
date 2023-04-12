let triplo = function(num){
    return 3 * num
}

triplo = (num) => {
    return 3 * num  
}

triplo = num => 3 * num //return implícito

console.log(triplo(Math.floor(Math.PI)))

let oi = function(){
    return 'OII!!'
}

oi = () => 'OII!!'
console.log(oi())