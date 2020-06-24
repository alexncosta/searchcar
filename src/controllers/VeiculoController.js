const Veiculo = require("../models/Veiculo");

module.exports = {
    async addVeiculo(req, res) {
        const { idMarca, idModelo, ano, cor, motor, combustivel, idEstado, idCidade, kilometragem, tipo } = req.body;
        console.log("Passou aqui Create");
        Veiculo.create({ idMarca, idModelo, ano, cor, motor, combustivel, idEstado, idCidade, kilometragem, tipo });
        console.log("Passou aqui depois do Create");
    },

    async listaVeiculos(req, res) {
        const veiculos = await Veiculo.findAll();
        return res.json(veiculos);
    }
};