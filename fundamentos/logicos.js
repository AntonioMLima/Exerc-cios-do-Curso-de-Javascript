function lazer(trabalho1, trabalho2){
    const compreSortvete = trabalho1 || trabalho2 //ou
    const compreTVDe50 = trabalho1 && trabalho2 //e
    const compreTVDe32 = trabalho1 != trabalho2 //XOR
    const toSaudavel = !compreSortvete //operador únario

    return{compreSortvete, compreTVDe50, compreTVDe50, compreTVDe32, toSaudavel}
} // a função suporta apenas um retorno, retorno é apenas um objeto

console.log(lazer(false, false))