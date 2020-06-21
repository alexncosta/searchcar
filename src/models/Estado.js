const { Model, DataTypes } = require("sequelize"); 

class Estado extends Model {
    static init(sequelize) {
        super.init({
            uf: DataTypes.STRING,
            descricao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Estado;