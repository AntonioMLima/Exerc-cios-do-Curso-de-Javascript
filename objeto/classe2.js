class grandPa {
    constructor(surname){
        this.surname = surname
    }
}

class father extends grandPa {  //extends indica que father possui grandpa como protótipo 
    constructor(surname, work = 'Teacher'){
        super(surname) //surname do protótipo
        this.work = work
    }
}

class son extends father {
    constructor(){
        super('Silva') //passa o valor para o construtor
    }
}

const filho = new son
console.log(filho)