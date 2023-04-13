// Closure -> escopo criado ao declarar um função

// esse escopo permite o acesso e a manipulação de variáveis externas

const x = 'Global'

function out(){
    const x = 'Local'
    function inside(){
        return x
    }
    return inside
}   

const myFun = out()
console.log(myFun())

