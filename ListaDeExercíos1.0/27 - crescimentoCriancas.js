const alcanceAltura =(crianca1, taxa1, crianca2, taxa2) => {
    if (crianca1 < crianca2 || crianca2 < crianca1 && taxa1 != taxa2){
        const menorCrianca = crianca1 < crianca2 ? crianca1 : crianca2
        const maiorTaxa = taxa1 > taxa2 ? taxa1 : taxa2
        let anos = 0
        if (menorCrianca == crianca1 && maiorTaxa == taxa1){
            while (crianca1 < crianca2){
                crianca2 += taxa2
                crianca1 += taxa1
                anos++ 
            }
            return console.log(`A criança 1 alcançará a criança 2 em ${anos} anos`)
        } else if(menorCrianca == crianca2 && maiorTaxa == taxa2){
            while (crianca2 < crianca1){
                crianca2 += taxa2
                crianca1 += taxa1
                anos++ 
        }
            return console.log(`A criança 2 alcançará a criança 1 em ${anos} anos`)
    } else{
        if (crianca1 < crianca2){
            console.log('Criança 1 não ultrapassrá criança 2')
        } else if(crianca2 < crianca1){
            console.log('Criança 2 não ultrapassrá criança 1')
        }
    }
    }  else if(taxa1 == taxa2 && crianca1 == crianca2){
        console.log('As crianças cresceram igualmente.')

    }else if(crianca1 == crianca2){
        if (taxa1 > taxa2){
            console.log('Criança 1 ultrapassará criança 2 em 1 ano.')
        } else if(taxa2 > taxa1){
            console.log('Criança 2 ultrapassará criança 1 em 1 ano.')
        } 
    } else if(taxa1 == taxa2){
        if (crianca1 < crianca2){
            console.log('Criança 1 não ultrapassará criança 2')
        } else if ( crianca2 < crianca1){
            console.log('Criança 2 não ultrapassará criança 1')
        }
    } 
}


alcanceAltura(150, 10, 150, 2)
alcanceAltura(150, 2, 150, 4)
alcanceAltura(150, 10, 130, 4)
