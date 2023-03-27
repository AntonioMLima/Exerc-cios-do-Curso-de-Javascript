{
    {
        {
            {
                var sera = 'será??' //escopo global, visível em toda aplicação
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
} //escopo da variável apenas na função 

console.log(teste())
