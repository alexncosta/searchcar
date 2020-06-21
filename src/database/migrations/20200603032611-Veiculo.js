'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Veiculos', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idMarca: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Marcas", key: "id" },
        },
        idModelo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Modelos", key: "id" },
        },
        ano: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        motor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        combustivel: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        idCidade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Cidades", key: "id" },
        },
        idEstado: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Estados", key: "id" },
        },
        kilometragem: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Veiculos');
  }
};
