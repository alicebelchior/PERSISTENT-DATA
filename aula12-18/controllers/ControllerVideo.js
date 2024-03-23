// IMPORTAÇÃO DO MÓDULO
const Video = require('../models/Video')

//CRIAÇÃO E EXPORTAÇÃO DA CLASSE 
module.exports = class VideoController{
    // ao chamar a função "cadastrarVideo", ela vai renderizar uma view (página) "cadastrar", dentro da pasta "videos"
    static cadastrarVideo(req, res) {
        res.render("videos/Cadastrar")
    }

    // CREATE
    // SINCRONISMO PARA CRIAÇÃO 
    static async VideoCreate(req, res){
        // tudo que vier do formulario de cadastro, será passado para variáveis (objeto) que depois serão criados no BD
        const video = { //instanciação do objeto
            autor: req.body.autor,
            titulo: req.body.titulo,
            assunto: req.body.assunto,
            descricao: req.body.descricao,
            link: req.body.link
        }
        await Video.create(video);
        res.send('Cadastro executado com sucesso')
    }

    // READ
    static async listarVideos(req, res) {

        // achar e listar todos os objetos da tabela
        const video = await Video.findAll({raw: true}); //essa função vai pegar tudo que ta dentro da tabela videos e vai jogar pra gnt 
        res.render('videos/listar', {video});
    }

    // UPDATE
    static async UpdateVideo(req, res) {
        const id_video = req.params.id_video;
        // essa função vai buscar um só registro (um objeto do BD), com a condição de que ele seja igual ao parametro passado
        const video = await Video.findOne({
            where: {id_video: id_video},
            raw: true
        });
        res.render('videos/update', {video});
    }
    static async VideoUpdate(req, res) {
        const id_video = req.body.id_video;
        const video = { //atualização do objeto
            autor: req.body.autor,
            titulo: req.body.titulo,
            assunto: req.body.assunto,
            descricao: req.body.descricao,
            link: req.body.link
        }
        await  Video.update(video, {
            where: {id_video: id_video}
        });
        res.redirect('/'); //ROTA
    }

    // DELETE
    static async removerVideo(req, res) {
        const id_video = req.body.id_video;
        await Video.destroy({
            where: {id_video: id_video}
        });
        res.redirect('/');
    }
}
