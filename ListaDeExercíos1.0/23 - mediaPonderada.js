const mediaAluno = (codigo, nota1, nota2, nota3) => {
    const codigoAluno = codigo
    const nota1max = nota1*0.4
    const nota2max = nota2*0.3
    const nota3max = nota3*0.3
    
    const mediaAluno = ((nota1max*10) + (nota2max*10) + (nota3max*10)) / 10
    
    let situacao
    if (mediaAluno >= 5){
        situacao = 'aprovado.'
    } else {
        situacao = 'reprovado.'
    }
    
    console.log(`Codgio do aluno: ${codigoAluno}.
    nota 1: ${nota1}
    nota 2: ${nota2}
    nota 3: ${nota3}
    media : ${mediaAluno}
    situação: ${situacao}`)
       
    }

    
    mediaAluno(123, 2.8, 6, 3.5)