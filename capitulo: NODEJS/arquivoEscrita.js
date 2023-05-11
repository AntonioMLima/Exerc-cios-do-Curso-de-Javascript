const fs = require('fs')

const produto = {
    nome: 'Pen',
    preco: 9.90,
    devolucao: false
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => )
//nome do diretório; nome do arquivo que será gerado; conversão para JSON; callBack para tratar erro