// Em NODE um arquivo represente um módulo 

// tudo escrito em módulo não fica disponível púlicamente, apenas dentro do módulo

// para usar algo de um módulo é necessário exportar ou importar



// como exportar algo de um módulo para ser usado em outro arquivo:

this.ola = 'Olá pessoas' // frase poderá acessado em outro arquivo

exports.tchau = 'Adeus pessoas' 

module.exports.bemVindo = 'Bem vindo! Se acomode'

