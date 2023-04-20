function Investimento(capitalI, taxaJ, tempoA){
    const lucro = (taxaJ * capitalI) * tempoA
    
    this.calculeRetorno = function() { return console.log(`${Math.floor(capitalI+lucro)}`)}

    this.calculeRetornoComposto = function() {
            this.capitalatual = capitalI
        for (let i = 1; i <= tempoA; i++) {
            let acumulando = this.capitalatual*(1 + taxaJ)
            this.capitalatual = acumulando
        }
        
        return console.log(Math.floor(this.capitalatual))
        
    }
}

tesouroDireto = new Investimento(120, 10/100, 5)
tesouroDireto.calculeRetorno()
tesouroDireto.calculeRetornoComposto()



