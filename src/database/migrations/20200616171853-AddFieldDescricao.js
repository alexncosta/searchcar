'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Estados", 
      "descricao",
      {
        type: Sequelize.STRING,
      }
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Estados",
      "descricao",
    );
  }
};
