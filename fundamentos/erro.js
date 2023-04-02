function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}


function nomeCapsLock(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!') //codigo que pode dar erro 
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}
const obj = {nome: 'Antonio'}
nomeCapsLock(obj)