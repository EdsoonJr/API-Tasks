const Tabela = require('./TabelaSubTasks')

class SubTasks {
    constructor ({id,titulo,relevancia,completada,task,
        dataCriacao,dataAtualizacao}){

           this.id = id
           this.titulo = titulo
           this.relevancia = relevancia
           this.completada = completada
           this.task = task
           this.dataCriacao = dataCriacao
           this.dataAtualizacao = dataAtualizacao
            
    }

    validar () {
        if (typeof this.titulo !== 'string' || this.titulo.length === 0){
            throw new Error ('O Campo titulo está Inválido')
        }

        if (typeof this.relevancia !=='number'){
            throw new Error ('O Campo Relevancia está inválido')
        }
        if (typeof this.completada !=='boolean'){
            throw new Error ('O Campo Completada Está Inválido,Apenas(True||False)')
        }
    }

    async criar () {
        this.validar()
        const resultado = await Tabela.inserir({
            titulo: this.titulo,
            relevancia : this.relevancia,
            completada : this.completada,
            task : this.task

        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao


    }

    apagar (){
        return Tabela.remover(this.id ,this.task)
    }

    async carrregar () {
        const subTasks = await Tabela.pegarPorId(this.id, this.task)
        this.titulo = subTasks.titulo
        this.relevancia = subTasks.relevancia
        this.completada = subTasks.completada
        this.dataCriacao = subTasks.dataCriacao
        this.dataAtualizacao = subTasks.dataAtualizacao
    }

    atualizar () {
        const dadosParaAtualizar = {
            
        }

        if(typeof this.titulo ==='string' && this.titulo.length > 0){
            dadosParaAtualizar.titulo = this.titulo
        }

        if(typeof this.relevancia ==='number'){
            dadosParaAtualizar.relevancia = this.relevancia
        }

        if(typeof this.completada === 'boolean'){
            dadosParaAtualizar.completada = this.completada
        }

        if(Object.keys(dadosParaAtualizar).length == 0){
            throw new Error ('Não Foram Fornecidos Dados Para Atualizar')

        }

        return Tabela.atualizar(
            {
                id: this.id,
                task: this.task
            },
            dadosParaAtualizar
        )
    }

}

module.exports = SubTasks