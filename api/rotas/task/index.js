const roteador = require('express').Router()
const TabelaTask = require('./TabelaTask')
const Task = require('./Task')
const SerializadorTask = require('../../Serializador').SerializadorTask

 

 roteador.get('/', async (requisicao, resposta) => {
     const resultados = await TabelaTask.listar()
     resposta.status(200)
     const serializador = new SerializadorTask(
         resposta.getHeader('Content-Type')
     )
     resposta.send(
         serializador.serializar(resultados)
     )

 })

 roteador.post('/', async (requisicao, resposta,proximo) => {
     try {
        const dadosRecebidos = requisicao.body
        const task = new Task(dadosRecebidos)
        await task.criar()
        resposta.status(201)
        const serializador = new SerializadorTask(
            resposta.getHeader('Content-Type')
        )
        resposta.send(
            serializador.serializar(task)
        )
     } catch (erro) {
         proximo(erro)
     }
 })

 roteador.get('/:idTask', async (requisicao, resposta, proximo) => {


     try {
         const id = requisicao.params.idTask
         const task = new Task({
             id: id
         })
         await task.carregar()
         resposta.status(200)
         const serializador = new SerializadorTask(
            resposta.getHeader('Content-Type')
        )
         resposta.send(
             serializador.serializar(task)
         )

     } catch (erro) {
         proximo(erro)
     }
 })

 roteador.put('/:idTask', async (requisicao, resposta,proximo) => {
     try {
         const id = requisicao.params.idTask
         const dadosRecebidos = requisicao.body
         const dados = Object.assign({}, dadosRecebidos, {
             id: id
         })
         const task = new Task(dados)
         await task.atualizar()
         resposta.status(204)
         resposta.end()
     } catch (erro) {
        proximo(erro)
     }

 })

 roteador.delete('/:idTask',async (requisicao, resposta,proximo)=>{
     
     try {
        const id  = requisicao.params.idTask
        const task = new Task({id: id})
        await task.carregar()
        await task.remover()
        resposta.status(204)
        resposta.end()
     } catch (erro) {
         proximo(erro)
         
     }
 })

 const roteadorSubTasks = require('./subTasks')

 const verificarTask = async (requisicao, resposta, proximo)=>{
        try {
            const id = requisicao.params.idTask
            const task = new Task({id: id})
            await task.carregar()
            requisicao.task = task
            proximo()
        } catch (erro) {
            proximo(erro)
        }
 }

 roteador.use('/:idTask/subtasks', verificarTask, roteadorSubTasks)

 module.exports = roteador