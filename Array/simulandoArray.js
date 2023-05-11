const simulandoArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Cris'
}
console.log(simulandoArray)

Object.defineProperty(simulandoArray, 'arrayDeVerda', {
    value: function() {return Object.values(this)},
    enumerable: false
})

arrayVerdade = ['Rafael', 'Ana', 'Cris']
console.log(simulandoArray.arrayDeVerda(), arrayVerdade )
