const Revenda = require("../models/Revendedore");

module.exports = {
    async addRevendedor(req, res) {
        const { nome, telefone, endereco } = req.body;
        Revenda.create({ nome, telefone, endereco });
    },

    async listaRevendedores(req, res) {
        const revenda = await Revenda.findAll();
        return res.json(revenda);
    }
};