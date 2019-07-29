'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'permission',
      {
        permission_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        type_permission: Sequelize.STRING
      },
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('permission'); 
  }
};
