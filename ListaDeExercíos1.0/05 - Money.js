const money = (num) => {
    const dinheiro = num.toFixed(2)
    const poscent = dinheiro.indexOf('.')
    console.log(`R$${dinheiro.substring(0, poscent)},${dinheiro.substring(poscent+1)}`)
}

money(0.1 + 0.2)