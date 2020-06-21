const Cidade = require("../models/Cidade");

module.exports = {
    async addCidade(req, res) {
        const { idEstado, nome } = req.body;
        Cidade.create({ idEstado, nome });
    },

    async listaCidades(req, res) {
        const cidades = await Cidade.findAll();
        return res.json(cidades);
    }

};