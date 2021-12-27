const Modelo = require('./ModeloTabelaTask')
const NaoEncontrado = require('../../erro/NaoEncontrado')


module.exports = {
    listar() {
        return Modelo.findAll()
    },

    inserir (task){
        return Modelo.create(task)
    },

    async pegarPorId (id){
        const taskEncontrada = await Modelo.findOne({
            where:{
                id: id
            }  
        })

        if(!taskEncontrada){
            throw new NaoEncontrado()
        }


        return taskEncontrada
    },
    atualizar (id,dadosParaAtualizar) {
       
        return Modelo.update(
            dadosParaAtualizar,
            {
                where:{id:id}
            }
        )


    },
    

    remover (id) {
        return Modelo.destroy({
            where: {id: id}
        })
    }
}