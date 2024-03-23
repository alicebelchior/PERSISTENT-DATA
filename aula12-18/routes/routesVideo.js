// CRIAÇÃO DAS ROTAS
const express = require("express");
const ControllerVideo = require("../controllers/ControllerVideo");
const router = express.Router();

// ROTA PARA O CADASTRAR
// chamando a view para o cadastro
router.get("/Cadastrar", ControllerVideo.cadastrarVideo);
// o retorno do formulário para cadastro no banco
router.post("/Cadastrar", ControllerVideo.VideoCreate);

// ROTA PARA O READ
// mostra todos os vídeos que temos no BD
router.get("/", ControllerVideo.listarVideos);

// ROTA PARA O UPDATE
// chamando a view para atualizar algum campo/arquivo errado
router.get("/update/id_video", ControllerVideo.UpdateVideo);
// envio das alterações para o BD
router.post("/update", ControllerVideo.VideoUpdate);

// ROTA PARA O DELETE
router.post("/remover", ControllerVideo.removerVideo);

module.exports = router;
