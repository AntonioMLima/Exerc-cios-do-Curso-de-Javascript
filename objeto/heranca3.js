const pai = {nome: 'Antonio', corPele: 'preta'}

const filha1 = Object.create(pai) //objeto que será o protótipo
filha1.nome = 'Carolina'
console.log(filha1.corPele)

const filha2 = Object.create(pai, {
    nome: { value: 'Rafaela', writable: false, enumerable: true}
})
// 2° parametro é um objeto

console.log(filha2.nome)
console.log(`${filha2.nome} tem pele ${filha1.corPele}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//atributos recebidos por herança não lidos nas funções de object, mas com for:

for (let  key in filha2){
    console.log(key)
}

for (let key in filha1){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}
//verifica se um atributp pertence ao objeto ou ao protótipo do objeto