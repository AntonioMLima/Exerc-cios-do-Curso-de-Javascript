const verificaString = (string1, string2) => {
    string1normal = string1.toLowerCase()
    string2normal = string2.toLowerCase()
    let igual
    for (i in string1normal){
        for (t in string2normal){
            if (string1normal[i] != string2normal[t]){
                igual = false
                if (t == string2normal.length){
                    break
                }
            } else {
                igual = true
                break
            }
        }
    }
    
    if (igual == false){
        return console.log(igual)
    }

    for (i in string2normal){
        for (t in string1normal){
            if (string2normal[i] != string1normal[t]){
                igual = false
                if (t == string1normal.length){
                    break
                }
            } else {
                igual = true
                break
            }
        }
    }

    console.log(igual)
}


    


verificaString('ANT9ONIIIOAO', 'aNTONIO9')



