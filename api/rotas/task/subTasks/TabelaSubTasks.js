const Modelo = require('./ModeloTabelaSubTasks')

module.exports = {
    listar (idTask) {
        return Modelo.findAll({
            where: {
                task: idTask
            }
        })
    },

    inserir (dados) {
        return Modelo.create(dados)
    },

    remover (idSubTasks, idTask) {
        return Modelo.destroy({
            where:{
                id: idSubTasks,
                task : idTask
            }
        })
    },

    async pegarPorId (idSubTasks, idTask){
        const sTaskEncontrada = await Modelo.findOne({
                where: {
                    id: idSubTasks,
                    task: idTask
                }
                
        })

        if(!sTaskEncontrada){
            throw new Error ('Task Não Foi Encontrada')
        }

        return sTaskEncontrada
    },
    
    atualizar (dadosSubTasks, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: dadosSubTasks
            }
        )
    }

    
}