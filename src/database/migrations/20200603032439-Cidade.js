'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Cidades', 
      {  
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idEstado: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Estados", key: "id"},
        },
        cidade: {
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
      return queryInterface.dropTable('Cidades');
  }
};
