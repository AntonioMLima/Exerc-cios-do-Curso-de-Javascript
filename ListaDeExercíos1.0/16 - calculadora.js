function Calcule(a, operador, b){
    switch(operador){
        case '+':
            console.log(`${a} + ${b} = ${a+b}`)
            break
        case '-':
            console.log(`${a} - ${b} = ${a-b}`)
            break
        case '/':
            console.log(`${a} / ${b} = ${a / b}`)
            break
        case '*':
            console.log(`${a} * ${b} = ${a*b}`)
            break
        default:
            console.log(`${operador} é um operador inválido.`)
    }
}

Calcule(4, '+', 6)
Calcule(5, '-', 9)
Calcule(16, '/', 4)
Calcule(6, '*', 10)
Calcule(5, '%', 2)
