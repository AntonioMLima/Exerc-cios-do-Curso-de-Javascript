// notação literal

const obj1 = {}

// Object em JS

const obj2 = new Object // Object é uma função construtora que cria um objeto

// função construtora
function product(nome, preco, desconto){
    this.nome = nome //apenas o atributo nome será público
    this.getPrecoComDesc = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new product('Papel higiênico', 10, 0.20)
const p2 = new product('Celular', 2000, 0.25)
console.log(p1.getPrecoComDesc())
console.log(p2.getPrecoComDesc())

// Função Factory
function perfFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase/30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = perfFuncionario('Antonio', 8000, 10)
const f2 = perfFuncionario('Roberto', 5000, 5)
console.log(f1.getSalario(), f2.getSalario())


// Object.create

const daughter = Object.create(null)
daughter.nome = 'Roberta'
console.log(daughter)


// função bem conhecida que retorna um objeto
const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info ) //JSON é texto e também possui uma coleção de chaves e valores
