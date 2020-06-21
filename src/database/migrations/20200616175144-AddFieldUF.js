'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Estados", "uf", {type: Sequelize.STRING, allowNull: false })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Estados", "uf");
  }
};
