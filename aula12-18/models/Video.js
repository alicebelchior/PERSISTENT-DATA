// BILIOTECAS/MÓDULOS UTILIZADOS
const Sequelize = require('sequelize');
const database = require('../db/db');  // CONEXÃO COM O BD

const Video = database.define('video', {
    id_video: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    database, modelname: 'video',
    tablename: 'videos'
});

// EXPORTAÇÃO DO MÓDULO
module.exports = Video;