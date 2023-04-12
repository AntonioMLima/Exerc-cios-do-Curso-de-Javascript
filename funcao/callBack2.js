const zeroDez = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//Sem CallBack
const zeroSete = []
for (let i in zeroDez){
    if (zeroDez[i] < 8){
        zeroSete.push(zeroDez[i])
    }
}
console.log(zeroSete)

//com CallBack
const zeroSete1  = zeroDez.filter(num => num < 8)
console.log(zeroSete1)