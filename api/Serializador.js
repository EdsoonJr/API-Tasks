//const { json } = require('body-parser')
const ValorNaoSuportado = require('./erro/ValorNaoSuportado')
class Serializador {
    json (dados) {
        return JSON.stringify(dados)
    }

    serializar (dados) {
        if(this.contentType === 'application/json'){
            return this.json(dados)
        }

        throw new ValorNaoSuportado(this.contentType)

    }
}

class SerializadorTask extends Serializador{
    constructor (contentType) {
        super()
        this.contentType =contentType
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorTask : SerializadorTask,
    formatosAceitos : ['application/json']
}