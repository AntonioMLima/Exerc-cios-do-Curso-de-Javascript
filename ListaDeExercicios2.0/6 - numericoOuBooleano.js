function NumOrBoolInverso(value) {
    if (typeof value == "boolean"){
        return value = true ? false : true
    } else if (typeof value === "number") {
        return value = value*(-1)
    } else {
        return `Booleano ou número esperado, mas o valor é do tipo ${typeof value}`
    }
}

console.log(NumOrBoolInverso(true))
console.log(NumOrBoolInverso('6'))
console.log(NumOrBoolInverso(-2000))
console.log(NumOrBoolInverso('ILoveProgramming'))
