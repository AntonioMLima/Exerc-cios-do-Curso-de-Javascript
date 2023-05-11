const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// axios é um client http que faz requisições para obter informações de algo que está na nuvem

// url está em um servidor remóto


// Forma imperativa ->>

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const funcionariaChinesaMenorSalario = funcionarios.filter(e => e.pais == 'China')
    .filter(e => e.genero == 'F')
    .reduce((func1, func2) => func1.salario < func2.salario ? func1 : func2)
    console.log(funcionariaChinesaMenorSalario)
})





//método get para obter informação do servidor
