//console.log(global) - dentro do brower temos window no lugar do global 


global.myApp = Object.freeze({
    introduceYourSelf(){
        console.log('I am everywhere')
    },
    nome: 'Cool System'
})