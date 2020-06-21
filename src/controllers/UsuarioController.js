const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

module.exports = {
    
    async addUsuario(req, res) {
        
        let nome = req.body.nome;
        let login = req.body.login;
        let senha = req.body.senha;

        bcrypt.genSalt(10, (erro, salt) => {
            bcrypt.hash(senha, salt, (erro, hash) => {
                if(erro) {
                    req.flash("error_msg", "Erro ao salvar o usuário");
                    res.render("cadUsuario");
                } 
                senha = hash;
                Usuario.create({ nome, login, senha });
            });
        });
    },

    async listaUsuarios(req, res) {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },

    async altUsuario(req, res) {
        const { id } = req.params;
        const { nome, login, senha } = req.body;
        const usuarios = await Usuario.update({ nome, login, senha }, { where: { id: req.id }});
    },
};