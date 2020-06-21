module.exports = {
    isLogedin: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }

        req.flash("error_msg", "Usuário precisa estar autenticado para acessa o Painel de Administração de Cadastros");
        req.redirect("/login");
    }
}