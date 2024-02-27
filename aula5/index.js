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
    static init(sequelize){
        super.init({    //esse comando inicia o modulo sequelize, aqui ele começa a criar a tabela dentro do sequelize
            
        })   
 
    }
}

//Sincronização - ele vai forçar uma atualização do sequelize (BD)
(async () => {
  await sequelize.sync({
    force: true,
  });
})();
