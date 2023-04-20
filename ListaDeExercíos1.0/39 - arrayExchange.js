const trocaVetores = (vetor1, vetor2) => {
    console.log(`vetor 1: ${vetor1}`)
    console.log(`vetor 2: ${vetor2}`)


    for (i in vetor1){
        [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
    }

    console.log(`vetor 1: ${vetor1}`)
    console.log(`vetor 2: ${vetor2}`)
}

const ant = ['A', 'N', 'T']
const tna = ['T', 'N', 'A']

trocaVetores(ant, tna)

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaVetores(vetorA, vetorB)

