// BILIOTECAS/MÓDULOS UTILIZADOS
const database = require('./db/db');
// CRIAÇÃO DO SERVIDOR NODE
const express = require('express');
const app = express();
const porta = 443;

// SINCRONIZAÇÃO COM O BD
try{
    database.sync().then(() =>{
        app.listen(porta, () =>{
            console.log('Servidor rodando');
        });
    });
} catch(erro) {
    console.log('Erro ao sincronizar com o banco de dados', erro);
}
