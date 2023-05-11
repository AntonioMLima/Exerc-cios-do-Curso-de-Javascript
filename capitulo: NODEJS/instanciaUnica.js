// Ao importar um módulo, por padrão o módulo é casheado


module.exports = {
    valor: 1,
    aumentar() {
        this.valor++
    }
}

// isso significa que ele possui uma única instância


// para driblar isso é possível usar funções factory(função que retorna um objeto) 