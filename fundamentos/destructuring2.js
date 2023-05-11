const [a, b] = [10, 1]
console.log(b)

const d = [10, 7, 9 , 8]

const[n1, ,n3, , n5, n6 = 0] = d
console.log(n1, n3, n5, n6) //cria variável para cada elemento da array

const [, [, nota]] = [[5,7,2],[6,8,2]]
console.log(nota)