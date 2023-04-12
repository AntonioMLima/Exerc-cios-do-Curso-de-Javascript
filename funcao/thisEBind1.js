const pessoa = {
    saudacao: 'OLAAA!!',
    fale() {
        console.log(this.saudacao) //this = objeto dono da função
        console.log(this === pessoa)
    }
}

pessoa.fale()

const fale = pessoa.fale
fale()

const faleDepessoa = pessoa.fale.bind(pessoa) //bind define o this
faleDepessoa()