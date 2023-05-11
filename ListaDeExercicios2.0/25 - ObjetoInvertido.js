function inverteOBJ(obj){
    const objetos = Object.entries(obj)
    const objInvertido = {}
    objetos.forEach(e => objInvertido[e[1]] = e[0])
    return console.log(objInvertido)
}




a = {a: 1, b: 2, c: 3}
inverteOBJ(a)