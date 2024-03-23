// BILIOTECAS/MÓDULOS UTILIZADOS
const database = require("./db/db");
const express = require("express"); // CRIAÇÃO DO SERVIDOR NODE
const app = express(); // CRIAÇÃO DO SERVIDOR NODE
const porta = 443;
const Video = require("./models/Video"); // REQUERENDO O MODEL "VIDEO"
const VideoRoutes = require("./routes/routesVideo"); // ROTA DAS VIEWS
const hand = require("express-handlebars");

// CONTROLLERS
const VideoControllers = require("./controllers/ControllerVideo");
app.engine("handlebars", hand.engine);
app.set("view engine", "handlebars");
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

// ROTAS
app.use("/", VideoRoutes);

// SINCRONIZAÇÃO COM O BD
try {
  database.sync().then(() => {
    app.listen(porta, () => {
      console.log("Servidor rodando");
    });
  });
} catch (erro) {
  console.log("Erro ao sincronizar com o banco de dados", erro);
}
