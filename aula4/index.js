//Importar as bibliotecas que serão utilizadas
const { Sequelize, Model, DataTypes } = require("sequelize");

//Abrindo conexão com banco
//se não tiver um banco, ele  instalar
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

//Sincronização - ele vai forçar uma atualização do sequelize (BD)
(async () => {
  await sequelize.sync({
    force: true,
  });
})();
