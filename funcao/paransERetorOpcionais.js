function areaTriangulo(altura, largura){
    const area = (altura * largura) / 2
    if (area > 20){
        console.log(`'Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(areaTriangulo(2, 2))
console.log(areaTriangulo(2)) //num * undefined = NaN
console.log(areaTriangulo()) //undefined * undefined = NaN
console.log(areaTriangulo(4, 2, 5, 2, 1, 9)) //considera apenas os dois primeiros valores
console.log(areaTriangulo(9, 9))