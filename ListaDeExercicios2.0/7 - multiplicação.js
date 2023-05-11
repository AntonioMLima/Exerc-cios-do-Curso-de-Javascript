const multiplica = (num1, num2) => {
    let resultado = 0
    for (let i = 0; i < num2; i++){
        resultado += num1
    }

    return resultado
}



console.log(multiplica(5, 5))
console.log(multiplica(0, 7))
