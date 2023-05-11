// module file system é um módulo nativo do NODE que permite a leitura de arquivos

const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//nome do diretŕio, arquivo

//sincrona...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// primeiro paramêtro: arquivo, segundo parâmetro: UniCode

//arquivos grandes iram travar o loop do NODE



//assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) //necessario para ter acesso aos dados
    console.log(`${config.db.host}: ${config.db.port}`)
}) //callBack na última ordem de execução


//terceiro parâmetro: CallBack para o arquivo lido

const config = require('./arquivo.json') //já retorna um objeto
console.log(config.db)


// lendo pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) //array com nome das pastas
})

// __dirname --> constante presente em todos arquivos do NODE que representa o diretório atual 