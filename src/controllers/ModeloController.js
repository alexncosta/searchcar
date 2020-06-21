const Modelo = require("../models/Modelo");

module.exports = {
    async addModelo(req, res) {
        const { nome, idMarca  } = req.body;
        Modelo.create({ nome, idMarca });
    },

    async listaModelos(req, res) {
        const modelos = await Modelo.findAll();
        return res.json(modelos);
    }

};