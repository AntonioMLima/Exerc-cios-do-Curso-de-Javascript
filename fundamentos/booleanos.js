let taDuro = false
console.log(taDuro)

taDuro = true
console.log(typeof taDuro)

taDuro = -1
console.log(!taDuro) // ! exclamação representa uma negação, !! força uma conversão para boolean

console.log(`Valores verdadeiros:
3: ${!!3}
-1: ${!!-1}
' ': ${!!' '}
string: ${!!'texto'}
arrays[]: ${!![]}
LO{}: ${!!{}} /
infinito: ${!!Infinity} 
atribuição true: ${!!(taDuro = true)}\n`) 


console.log(`Valores falso:
0: ${!!0}
'': ${!!''}
nulo: ${!!null}
NaN: ${!!NaN}
não definido: ${!!undefined}
atribuição false: ${!!(taDuro = false)}`)

console.log(`Um pouco de tabela verdade:
${!!('' || null || 0 || ' ')}`) // || = Ou

let nome = 'Antonio'
console.log(nome || 'Desconhecido') // O valor nome é verdadeiro, então não impreme 'Desconhecido'
                                    // tem nome?        


            