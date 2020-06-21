const Veiculo = require("../models/Veiculo");

module.exports = {
    async addVeiculo(req, res) {
        const { idMarca, idModelo, ano, cor, motor, combustivel, idCidade, idEstado, kilometragem, tipo } = req.body;
        const veiculo = await Veiculo.create({ idMarca, idModelo, ano, cor, motor, combustivel, idCidade, idEstado, kilometragem, tipo });
        return res.json(veiculo);
    },

    async listaVeiculos(req, res) {
        const veiculos = await Veiculo.findAll();
        return res.json(veiculos);
    }
};