const Estado = require("../models/Estado");

module.exports = {
    async addEstado(req, res) {
        const { uf, descricao } = req.body;
        Estado.create({ uf, descricao });
    },

    async listaEstados(req, res) {
        const estados = await Estado.findAll();
        return res.json(estados);
    }

};