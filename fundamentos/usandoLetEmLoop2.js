var funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
} //let permite que a array 'se lembre' do valor da variàvel 

funcs[2]()
funcs[8]() //função tem consciência do local em que foi definida