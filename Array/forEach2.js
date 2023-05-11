const comprasMercado = ['Papel higiênico', 'Máscara', 'Biscoito', 'Cerveja', 'Arroz']


Object.defineProperty(Array.prototype, 'forEach2', {
    value: function (callBack){for (let i = 0; i < this.length; i++){callBack(this[i], i, this)}},
    enumerable: false
})


comprasMercado.forEach2((elemento, indice, array) => console.log(`${indice+1}: ${elemento}`, array))