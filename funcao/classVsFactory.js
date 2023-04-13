class person {
    constructor(nome) {
        this.nome = nome 
    }

    talk() {
        console.log(`My name is ${this.nome}`)
    }
}

const p1 = new person('Antonio')
p1.talk()
console.log(p1)

const person1 = nome => {
    return {
        talk: () => console.log(`My name is ${nome}`)
    }
} // Não importa quem dispara função, nome não varia, diferentemente se usarmos a classe



const p2 = person1(`Cristiane`)
p2.talk()