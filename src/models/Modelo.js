const { Model, DataTypes } = require("sequelize"); 

class Modelo extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            idMarca: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Modelo;