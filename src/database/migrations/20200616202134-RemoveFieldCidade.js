'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("Cidades", "cidade");
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Cidades", "cidade", {type: Sequelize.STRING, allowNull: false,});
  }
};
