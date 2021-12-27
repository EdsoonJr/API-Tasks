class NaoEncontrado extends Error{
    constructor () {
        super('Task Não Foi Encontrada')
        this.name ='NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado