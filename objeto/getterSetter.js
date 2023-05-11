const sequencia = {
    _value: 1, //convenção - variável que deve acessada apenas internamente
    get value() { return this._value++}, //retorna o valor incrementado
    set value(value) {
        if (value > this._value) {
            this._value = value
        }
    }
}

console.log(sequencia.value, sequencia.value)
sequencia.value = 1000
console.log(sequencia.value, sequencia.value)
sequencia.value = 900
console.log(sequencia.value, sequencia.value)
sequencia.value = 3000
console.log(sequencia._value)

/*value é uma pseudovariável que primeiramente chama o metodo set que trabalha
com a variável _value */

//GET e SET são funções que servem para acessar algum valor e fazer alguma validação