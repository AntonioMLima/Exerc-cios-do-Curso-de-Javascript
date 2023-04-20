const calculaConvenio = idade => {
    const valorPadrao = 100
    const valorAte10 = 80 + valorPadrao
    const valorAte30 = 50 + valorPadrao
    const valorAte60 = 95 + valorPadrao
    const valorMaior60 = 130 + valorPadrao
    
    if (idade < 0){
        console.log('Idade Inválida.')
    } else {
        if (idade < 10){
            console.log(`O valor a ser pago é R$${valorAte10.toFixed(2)}`)
        }

        if (idade >= 10 && idade <= 30){
            console.log(`O valor a ser pago é R$${valorAte30.toFixed(2)}`)
        }

        if (idade > 30 && idade <= 60){
            console.log(`O valor a ser pago é R$${valorAte60.toFixed(2)}`)
        }

        if (idade > 60){
            console.log(`O valor a ser pago é R$${valorMaior60.toFixed(2)}`)
        }
    }
}

calculaConvenio(0)
calculaConvenio(10)
calculaConvenio(40)
calculaConvenio(67)