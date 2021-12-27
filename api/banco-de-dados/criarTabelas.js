const modelos = [
    require('../rotas/task/ModeloTabelaTask'),
    require('../rotas/task/subTasks/ModeloTabelaSubTasks')
]

async function criarTabelas (){
    for (let contador = 0; contador <modelos.length; contador++) {
        const modelo = modelos [contador]
        await modelo.sync()        
    }    
}

criarTabelas()