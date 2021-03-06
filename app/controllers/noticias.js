module.exports.noticias = function(app,req,res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});
    });
}

module.exports.noticia = function(app,req,res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    var idNoticia = req.query;

    noticiasModel.getNoticia(idNoticia, function(error, result){
        res.render("noticias/noticia", {noticia : result});
    });
}