const school = [{
    nome: 'Turma 1A', 
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 8.7
    }]
}, {
    nome: 'Turma 2A',
    alunos: [{
        nome: 'Rose',
        nota: 9.5
    }, {
        nome: 'Leandro',
        nota: 10
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = school.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callBack){
    return Array.prototype.concat.apply([], this.map(callBack))
} //this = []


const notas2 = school.flatMap(getNotasTurma)
console.log(notas2)
