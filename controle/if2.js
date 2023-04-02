function testando(numero){
    if(numero > 7)
        console.log(numero)
        console.log('Acabou!!')
} //blocos são necessários para mais de uma sentença de código

testando(6)
testando(8)

function testando1(numero){
    if(numero > 6); { //; causa problemas nas estruturas de controle
        console.log(numero)
    }
}

testando1(9)
testando1(-2)