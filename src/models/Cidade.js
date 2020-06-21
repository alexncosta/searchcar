const { Model, DataTypes } = require("sequelize"); 

class Cidade extends Model {
    static init(sequelize) {
        super.init({
            idEstado: DataTypes.INTEGER,
            nome: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Cidade;