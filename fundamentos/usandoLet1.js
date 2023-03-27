var num = 1
{
    let num = 2
    console.log(`Dentro: ${num}`) // preferência pelo menor escopo
} //'let' visível apenas dentro do bloco

console.log(`Fora: ${num}`)

/*
 Var : escopo global e de função
 Let : escopo global, bloco e de função
*/