function person(nome){
    this.nome
    this.fale = function(){
        console.log(`My name is ${nome}`)
    }
}


const p1 = new person('José')
p1.fale()