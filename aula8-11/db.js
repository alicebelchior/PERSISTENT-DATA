// Esse arquivo vai guardar todas as informações relativas à criação do banco de dados e à conexão com o BD
const Sequelize = require("sequelize")
const sequelize = new Sequelize({
    dialect: "sequelize",
    storage: "./cliente.sqlite"  //esse BD vai ser criado na pasta raiz
})
//exportação do arquivo para ser usado como sequelize, podendo ser usado em qualquer local da minha aplicação
module.exports = sequelize;
