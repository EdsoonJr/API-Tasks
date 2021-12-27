const Sequelize = require('sequelize')
const instancia = require('../../../banco-de-dados')

const colunas = {
    titulo:{
        type : Sequelize.STRING,
        allowNull:false
    },

    relevancia:{
        type: Sequelize.INTEGER,
        allowNull:false
    },

    completada:{
        type: Sequelize.BOOLEAN,
        allowNull:false

    },

    task : {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references:{
            model: require('../ModeloTabelaTask'),
            key: 'id'
        }
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'subTasks',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'
}

module.exports = instancia.define('subTasks',colunas ,opcoes)