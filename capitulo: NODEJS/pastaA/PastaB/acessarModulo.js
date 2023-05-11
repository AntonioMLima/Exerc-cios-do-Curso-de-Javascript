const moduloA = require('../../moduloA') //volta duas pasta e acessa o modulo A - caminho relativo
console.log(moduloA.ola)

// /home/antonio_manoel/Aprendendo Javascript/EXERCICIOS-JS/capitulo: NODEJS/moduloA.js - caminho absoluto

/*

const http = require('http') //módulo interno do node
http.createServer((req, res) => {
   res.write('bom dia!')
    res.end()
}).listen(8080)

*/


const index = require('./pastaC') //ao acessar uma pasta, um arquivo com nome de index é lido automaticamente
console.log(index.ola)