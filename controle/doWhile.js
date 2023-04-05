function imprimaAlgumInt(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let op //variável somente declarada, não é necessário atribuir um valor

do {
    op = imprimaAlgumInt(-1, 10)
    console.log(`O número é ${op}`)
}while(op != -1) 
//pouco usado, realiza o bloco pelo menos 1 vez











   