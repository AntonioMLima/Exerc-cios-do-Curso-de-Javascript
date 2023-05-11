class lancamento {
    constructor(nome = 'Generic', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

//constructor é a função que ira ser chamada no momento em que a classe for instanciada


class financialCicle{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salário', 2300) //credito

const bota = new lancamento ('Bota', -200) // débito

const contas = new financialCicle(4, 2023)

contas.addLancamentos(bota, salario) //adicionando os gastos e lucro por meio de uma função

console.log(contas)

//Classe é uma forma alternativa para trabalhar com funções construtoras, apenas muda a sintaxe

