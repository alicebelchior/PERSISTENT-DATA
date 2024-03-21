// BILIOTECAS/MÓDULOS UTILIZADOS
const database = require('./db/db');
const express = require('express'); // CRIAÇÃO DO SERVIDOR NODE
const app = express(); // CRIAÇÃO DO SERVIDOR NODE
const porta = 443;
const Video = require('./models/Video'); // REQUERENDO O MODEL "VIDEO"

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
