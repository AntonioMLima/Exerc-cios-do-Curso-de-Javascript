require('./global') //disponível na aplicação inteira

myApp.introduceYourSelf()

myApp.nome = 'Eu sou um problema' //objeto congelado(freeze)

//um atributo global que pode ser mudado em qualquer lugar é algo perigoso

console.log(myApp.nome)
