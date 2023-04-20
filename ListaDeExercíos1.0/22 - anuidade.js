const jurosAnuidade = (mes, anuidade) => {
    if (mes <= 0){
        return console.log('Mês inválido')
    }
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto',
                    'setembro', 'outubro', 'novembro', 'dezembro']
    const mesPago = meses[mes-1]
    let juros = 0
    while (mes != 1){
        juros = anuidade*1.05
        anuidade = juros
        mes--
    }

    return console.log(`A mensalidade foi paga no mês de ${mesPago}. O valor pago foi R$${anuidade.toFixed(2)} `)
    
}
jurosAnuidade(4, 100)