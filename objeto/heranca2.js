// prototype chain

Object.prototype.attr0 = 'D' //não recomendado

const avo = {attr1: 'A' } //prototipo: object.prototype
const pai = {__proto__: avo, attr2: 'B', attr3: '0'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1) //procuro em attr1 em toda cadeia

console.log(filho.attr0, filho.attr3) // atributo attr3 mais próximo


const carro = {
    velAtual: 0,
    velMaxima: 300,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 430 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //super = metodo do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) //nome do objeto / protótipo 
Object.setPrototypeOf(volvo, carro)
//função importante de object 

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())
ferrari.acelerar(300)
console.log(ferrari.status())