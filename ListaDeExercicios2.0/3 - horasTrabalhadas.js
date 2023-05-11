const salario = (horasTrabalhadasMes, valorHora) => `Salário igual a R$ ${(horasTrabalhadasMes*valorHora).toFixed(2)}`
console.log(salario(150, 40.5))