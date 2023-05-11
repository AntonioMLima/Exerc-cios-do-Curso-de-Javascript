function removeAtt(obj, atributoDel){
    delete obj[atributoDel]
    return obj
}
console.log(removeAtt({'a': 1, 'b': 2, 'c': 3}, 'b'))
console.log(removeAtt({id: 20, nome: 'BluPen', descricao: 'Não preechido'}, 'descricao'))
