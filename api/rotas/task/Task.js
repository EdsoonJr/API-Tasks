const TabelaTask = require('./TabelaTask')
const CampoInvalido = require('../../erro/CampoInvalido')
const DadosNaoFornecidos = require('../../erro/DadosNaoFornecidos')
class Task {
    constructor({
        id,
        titulo,
        descricao,
        dataCriacao,
        dataAtualizacao
    }) {

        this.id = id,
            this.titulo = titulo,
            this.descricao = descricao,
            this.dataCriacao = dataCriacao,
            this.dataAtualizacao = dataAtualizacao
    }

    async criar() {
        this.validar()
        const resultado = await TabelaTask.inserir({
            titulo: this.titulo,
            descricao: this.descricao,

        })

        this.id = resultado.id,
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
    }

    async carregar() {
        const taskEncontrada = await TabelaTask.pegarPorId(this.id)
        this.titulo = taskEncontrada.titulo
        this.descricao = taskEncontrada.descricao
        this.dataCriacao = taskEncontrada.dataCriacao,
        this.dataAtualizacao = taskEncontrada.dataAtualizacao
    }

    async atualizar () {
        await TabelaTask.pegarPorId(this.id)
        const campos = ['titulo' , 'descricao']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0){
                dadosParaAtualizar[campo] = valor
            }
        })

        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new DadosNaoFornecidos()

        }
         await TabelaTask.atualizar(this.id,dadosParaAtualizar)
    }

    remover() {
        return TabelaTask.remover(this.id)
    }

    validar () {
        const campos = ['titulo','descricao']

        campos.forEach(campo =>{
            const valor = this[campo]

            if (typeof valor !== 'string' || valor.length ===0){
                throw new CampoInvalido(campo)
            }
        })
    }
}

module.exports = Task