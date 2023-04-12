function livro (paginas = 100, paginaLidasNoDia = 5){
    // atributo privado
    let paginaAtual = 0

    // método público - this é reponsável por tornar o atributo público
    this.ler = function(){
        if(paginaAtual + paginaLidasNoDia <= paginas){
            paginaAtual += paginaLidasNoDia
        } else {
            paginaAtual = paginas
        }
    }

    //método público - para criação de método um privado é necessario usar const ou let
    this.getPaginaAtual = function () {
        return paginaAtual
    }
}

const DomCasmurro = new livro //objeto instanciado a partir de uma função
DomCasmurro.ler()
console.log(DomCasmurro.getPaginaAtual())

const Maus = new livro( 430, 20 )
Maus.ler()
Maus.ler()
console.log(Maus.getPaginaAtual())

/* Uma função construtora funciona como um molde que permite
   A criação de objetos */

console.log(typeof livro)
console.log(typeof Maus)
