const classificaAumento = (plano, salarioAtual) => {
    switch(plano){
        case 'A':
            return salarioAtual*1.10
        case 'B':
            return salarioAtual*1.15
        case 'C':
            return salarioAtual*1.20
        default:
            return 'Plano inválido.'
    }
}

console.log(classificaAumento('A', 1000))
console.log(classificaAumento('B', 1000))
console.log(classificaAumento('C', 1000))
console.log(classificaAumento('D', 1000))
