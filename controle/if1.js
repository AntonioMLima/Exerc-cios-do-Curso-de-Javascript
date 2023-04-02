function passou(nota){
    if(nota >= 7){
        console.log(`Sua nota é ${nota}. Parábens você foi aprovado.`)
    }
}
passou(8.9)
passou(6.4)

function eVerdadeOuNao(afirmacao){
    if(afirmacao){
        console.log(`É verdade...${afirmacao}`)
    }
}
eVerdadeOuNao('que você é um imbecil.')
eVerdadeOuNao(null)