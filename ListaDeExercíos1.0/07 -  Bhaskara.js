function solveBhaskara(a, b, c){
    const delta = b**2 - 4*a*c
    if (delta < 0) {
        return console.log('Delta é negativo')
    } else {
        const raizDelta = delta**0.5
        const x1 =  (-b + raizDelta) / (2*a)
        const x2 =  (-b - raizDelta) / (2*a)
        let resultado = [ x1, x2]
        console.log(resultado)
    }
    
}



solveBhaskara(3, -1, -2)

solveBhaskara(2, -7, 0)

solveBhaskara(4, 0, 2)

solveBhaskara(4, 0, -16)

solveBhaskara(1, 3, 2)