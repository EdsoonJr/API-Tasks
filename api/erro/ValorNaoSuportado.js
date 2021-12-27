class ValorNaoSuportado extends Error {
    constructor(contentType){
        super(`O Tiipo de Conteudo ${contentType} Não é Suportado`)
        this.name = 'ValorNaoSuportado'
        this.idErro = 3
    }
}

module.exports = ValorNaoSuportado