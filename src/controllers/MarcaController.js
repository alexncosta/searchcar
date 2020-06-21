const Marca = require("../models/Marca");

module.exports = {
    async addMarca(req, res) {
        const { nome } = req.body;
        Marca.create({ nome });
    },

    async listaMarcas(req, res) {
        const marcas = await Marca.findAll();
        return res.json(marcas);
    }
};