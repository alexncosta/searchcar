'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Cidades", "nome", {type: Sequelize.STRING, allowNull: false })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Cidades", "nome");
  }
};
