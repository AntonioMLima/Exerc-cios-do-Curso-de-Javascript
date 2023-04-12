const marcasDeChocolates = ['Nestle', 'Garoto', 'Arcor', 'Lacta', 'Talento', 'Neugebauer']

function imprimeNomeEIndice(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

marcasDeChocolates.forEach(imprimeNomeEIndice) //dispara a função ao encontrar um novo elemento
marcasDeChocolates.forEach(marca => console.log(marca))
