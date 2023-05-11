const thisInArrow = () => {
    console.log(this === global) // This já não aponta para o objeto global

    console.log(this === module.exports)
    console.log(this === exports)
}

thisInArrow()