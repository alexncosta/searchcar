'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("Estados", "estado");
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Estados", "estado", {type: Sequelize.STRING, allowNull: false,});
  }
};
