const _ = require('lodash')//por padrão procura em node_modules e executa o arquivo index.js
setInterval(() => console.log(_.random(1, 1000)), 2000)

//underline é geralmente usado para indicar uma biblioteca(módulo de teceiros)