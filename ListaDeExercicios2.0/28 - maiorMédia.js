const maiorMedia = alunos => {

    let maiorMedia = 0
   const melhorAluno = {}
   for (chave in alunos){
    let mediaAtual = alunos[chave].reduce((a, b) => a + b) / alunos[chave].length
    if (mediaAtual > maiorMedia){
        melhorAluno.nome = chave
        melhorAluno.media = mediaAtual
    }
    maiorMedia = maiorMedia > mediaAtual ? maiorMedia : mediaAtual 
   }

   return console.log(melhorAluno)
}

const alunos = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    carla: [7, 7, 8, 9]
}

maiorMedia(alunos)
