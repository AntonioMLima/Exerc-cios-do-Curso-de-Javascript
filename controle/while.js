function algumInteiro(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} //random gera um valor aleatório entre 0 e 1, multiplicando pelo 
  //intervalo e somando ao mínimo, um número aleatório é gerado.

let op = 0

while (op  != -1){
    op = algumInteiro(-1, 10)
    console.log(`O número inteiro gerado foi ${op}`)
}


   