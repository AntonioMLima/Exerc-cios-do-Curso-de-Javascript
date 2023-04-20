const classifique = (a, b, c) => {
    if (a != b && b != c && c != a) {
        console.log('Os segmentos formam um triangulo escaleno.')
    } else if ( a == b && b == c){
        console.log('Os segmentos formam um triangulo equilatero.')
    } else if ( a == b || a == c || b == c){
        console.log('Os segmentos formam um triangulo isósceles')
    }
} 

classifique(10, 10, 10)
classifique(1, 2, 3)
classifique(1, 2, 2)