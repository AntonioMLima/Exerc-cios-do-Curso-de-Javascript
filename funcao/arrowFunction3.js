let comparandoThis = function (t){
    console.log(this === t)    
}

comparandoThis(global)

const obj = {}
comparandoThis = comparandoThis.bind(obj)
comparandoThis(global)
comparandoThis(obj)


let comparandoThisArrow = param => console.log(this === param)
comparandoThisArrow(global)
comparandoThisArrow(module.exports)

comparandoThisArrow = comparandoThisArrow.bind(obj)
comparandoThisArrow(obj)
comparandoThisArrow(module.exports)