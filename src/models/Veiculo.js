const { Model, DataTypes } = require("sequelize"); 

class Veiculo extends Model {
    static init(sequelize) {
        super.init({
            idMarca: DataTypes.INTEGER,
            idModelo: DataTypes.INTEGER,
            ano: DataTypes.STRING,
            cor: DataTypes.STRING,
            motor: DataTypes.STRING,
            combustivel: DataTypes.STRING,
            idEstado: DataTypes.INTEGER,
            idCidade: DataTypes.INTEGER,
            kilometragem: DataTypes.INTEGER,
            tipo: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Veiculo;