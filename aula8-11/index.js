//importando bibliotecas e arquivos
const database = require("./db");
const Cliente = require("./models/cliente");

//criando o servidor
const express = require("express");
const app = express();
const porta = 9443;

//constante que vai utilizar mecanismos para trabalhar com a junção do fomrulario com o banco de dados
const bodyParser = require("body-parser"); //essa const captura infos do formulario e joga p/ o BD

//setando os valores da view e engine
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

//criação das rotas do formulario e cadastro no BD
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));

//definindo rotas
//principal
app.get("/", (req, res) =>{
    res.send("Bem vindo ao cadastro de cliente");
});

//rota para o usuario entrar no formulario de cadastro
app.get("/cadcliente", function(req, res){
    res.render("formCliente");
})

//rota para receber os dados do formulario (configuração vinculado ao BD)
app.post("/addcliente", function(req, res){
    Cliente.create({
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        cidade: req.body.cidade,
        telefone: req.body.telefone
    }).then(function(){
        res.send("Cliente cadastrado com sucesso!");
    })
})

//servidor
app.listen(porta, () =>{
    console.log("Servidor rodando");
});

//sincronização para criação do banco de dados e da tabela
//processo de sincronismo
(async() =>{

    //controle de exceções
    try {
        const resultado = await database.sync();
        console.log(resultado); 

        const clientes = await Cliente.findAll();
        console.log("Lista de clientes \n", clientes);
    } catch (error) {
        console.log(error)
    }
})
(); //função para executar o sincronismo