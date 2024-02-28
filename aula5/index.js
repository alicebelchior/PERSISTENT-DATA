//Importar as bibliotecas que serão utilizadas
const { Sequelize, Model, DataTypes } = require("sequelize");

//Abrindo conexão com banco
//se não tiver um banco, ele vai instalar
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

//Antes do sincronismo, criar a tabela (classe) "setor"
//a tabela será criada como se fosse uma classe, pois ela tem métodos
class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        //esse comando inicia o modulo sequelize, aqui ele começa a criar a tabela dentro do sequelize
        //criação dos campos (atributos) da tabela
        idsetor: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        ramal: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(60),
        },
        //Definição do nme da tabela
      },
      { sequelize, modelname: "setor", tableName: "setores" }
    );
  }
}

//chamamento do init para solicitar a criação do modelo create table setor
Setor.init(sequelize);

//Sincronização - ele vai forçar uma atualização do sequelize (BD)
(async () => {
  await sequelize.sync({
    force: true,
  });
})();
