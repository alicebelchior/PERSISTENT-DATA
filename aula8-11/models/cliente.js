//criação do model
const Sequelize = require("sequelize");
const database = require("../db");

//criação da tabela
const Cliente = database.define("cliente", {
    id: {
        type: Sequelize.INTEGER,
        AutoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }, 
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//exportação para utilização da tabela na aplicação
module.exports = Cliente;
