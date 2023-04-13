const value = 'Global'


function myFun(){
    console.log(value)
}

/* funções possum consciência de onde foram definidas
   e corregam isso consigo*/



function execute() {
    const value = 'Local'
    myFun()
}

execute()