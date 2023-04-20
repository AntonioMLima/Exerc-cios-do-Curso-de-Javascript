


const comparePont = (pontos) => {
    listaDePontos = pontos.split(' ')
    let [piorRecord, record, vezesRecord, piorJogo] = [listaDePontos[0], listaDePontos[0], 0, 0]
    for (i in listaDePontos){
        if (i == 0){
            record = Number(listaDePontos[i])
            piorRecord = Number(listaDePontos[i])
        } else {
            if (Number(listaDePontos[i]) > record){
                record = Number(listaDePontos[i])
                vezesRecord += 1 
            } else if(Number(listaDePontos[i]) < piorRecord){
                piorRecord = listaDePontos[i]
                piorJogo = i
            }
        }
    }
    const resultado = [vezesRecord, Number(piorJogo)+1]
    return resultado
}

console.log(comparePont('10 20 20 8 25 3 0 30 1 100, -9'))
