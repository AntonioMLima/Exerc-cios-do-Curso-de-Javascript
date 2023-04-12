console.log(subtract(10, 4))

// function declararion

function subtract(x, y){
    return x - y
}
 /* O interpretador de JavaScript carrega primeiro
    essas funções, isso significa que podemos usá-las
    antes mesmo de declara-las. */




// console.log(div(18, 6)) // 


//function expression 
const div = function(x, y){
    return x / y
}

/* invocar esse tipo de função antes de declarar gerará um erro.
   O mesmo com ocorre com named function expressions.*/
   




   
// named function expression - muito pouco usada
const mult = function mult(x, y){
    return x * y
}

