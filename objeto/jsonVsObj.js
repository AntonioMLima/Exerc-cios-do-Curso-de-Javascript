const obj1 = {a: 1, b: 2, c: 3, sum() { return a + b +c } }

console.log(JSON.stringify(obj1)) 
/*  Transforma o objeto em json.
    Essa conversão causa a exclusão da função sum devido ao JSON ser um formato de dados*/


//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) - formato JSON inválido

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) - formato JSON inválido

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) //forma válida
/* Objeto gerado a partir de um JSON */

console.log(JSON.parse('{ "a": 1, "b": true, "c": 3.6, "d": {}, "e":[] }'))


