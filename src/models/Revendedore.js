const { Model, DataTypes } = require("sequelize"); 

class Revendedore extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            telefone: DataTypes.STRING,
            endereco: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Revendedore;