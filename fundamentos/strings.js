const escola = "COD3R"

console.log(escola.charAt(4)) //retorna o indice 4, a letra 'R' no caso
console.log(escola.charAt(5)) // Não irá retornar um erro, apenas a ausencia de algum valor
console.log(escola.charCodeAt(0)) // retorna o valor da tabela UniCode do incide 0
console.log(escola.indexOf('R')) // retorna a posição de algum elemento da string


console.log(escola.substring(1)) // imprime a string a partir do indice 1
console.log(escola.substring(0, 3)) // imprime a string do indice 0 ao 3 


console.log('Escola '.concat(escola).concat('!!')) // junta os elementos
console.log(escola.replace(3, 'E')) //substitui o indice 3 pela letra 'E'


console.log('Ana,Maria,João'.split(',')) //cria uma array usando a virgula como delimitador



