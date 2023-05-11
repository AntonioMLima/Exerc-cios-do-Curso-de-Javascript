function noVowel(palavra){
    const arrayPalavra = palavra.split('')
    for (let i = 0; i < arrayPalavra.length; i++){
        if(palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i'
        || palavra[i] == 'o' || palavra[i] == 'u'){
            delete arrayPalavra[i]
        }
    }
    
    console.log(arrayPalavra.join(''))
}

noVowel('Cod3r')
noVowel('Fundamentos')

