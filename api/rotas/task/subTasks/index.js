const roteador = require ('express').Router({mergeParams:true})
const Tabela = require('./TabelaSubTasks')
const SubTasks = require('./SubTasks')



roteador.get('/',async (requisicao , resposta) =>{
    const subTasks = await Tabela.listar(requisicao.task.id)
    resposta.send(
        JSON.stringify(subTasks)
    )
})

roteador.post('/',async (requisicao,resposta,proximo) =>{
    try {
        const idTask = requisicao.task.id
    const corpo = requisicao.body
    const dados = Object.assign({}, corpo, {task : idTask})
    const subTasks = new SubTasks(dados)
    await subTasks.criar()
    resposta.status(201)
    resposta.send(subTasks)
    } catch (erro) {
        proximo(erro)
        
    }

})

roteador.delete('/:id', async (requisicao,resposta) =>{
    const dados = {
        id: requisicao.params.id,
        task : requisicao.task.id
    }

    const subTasks = new SubTasks(dados)
    await subTasks.apagar()
    resposta.status(204)
    resposta.end()
})

roteador.get('/:id' , async (requisicao,resposta,proximo)=>{
   try {
    const dados = {
        id: requisicao.params.id,
        task: requisicao.task.id
    }

    const subTasks = new SubTasks(dados)
    await subTasks.carrregar()
    resposta.send(
        JSON.stringify(subTasks)
    )
   } catch (erro) {
       proximo(erro)
       
   }
})

roteador.put('/:id' ,async (requisicao, resposta,proximo) =>{
    try {
        const dados = Object.assign(
            {},
            requisicao.body,
            {
                    id: requisicao.params.id,
                    task : requisicao.task.id
                      
            }
        )
    
        const subTasks = new SubTasks(dados)
        await subTasks.atualizar()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        proximo(erro)
    }
})

module.exports = roteador