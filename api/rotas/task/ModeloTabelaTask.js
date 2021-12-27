const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }



}
const opcoes = {
    freezeTableName: true,
    tableName: 'task',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'
}


module.exports = instancia.define('task', colunas, opcoes)