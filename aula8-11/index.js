//sincronização para criação do banco de dados e da tabela
//processo de sincronismo
(async() =>{
    const database = require("./db");
    const Cliente = require("./cliente");

    //controle de exceções
    try {
        const resultado = await database.sync();
        console.log(resultado); 
    } catch (error) {
        console.log(error)
    }
})
(); //função para executar o sincronismo