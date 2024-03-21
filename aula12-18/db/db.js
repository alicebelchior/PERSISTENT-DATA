// BILIOTECAS/MÓDULOS UTILIZADOS
const Sequelize = require('sequelize');

// CRIANDO A CONFIG DO BD
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './videoteca.sqlite'
});

// TRATAMENTO DE ERROS E AUTENTICAÇÃO NO BANCO
try {
    sequelize.authenticate(); // CRIAÇÃO DA ATENTICAÇÃO COM O BD, VERIFICANDO SE ESTÁ TUDO CERTO
    console.log('Banco de dados conectado com sucesso!');
} catch(erro) {
    console.log('Erro ao conectar com o banco!', erro);
}

// EXPORTAÇÃO DO MÓDULO
module.exports = sequelize;