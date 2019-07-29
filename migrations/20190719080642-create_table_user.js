'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'user',
      {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        role_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'role',
            key: 'role_id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        user_name: {
          type: Sequelize.STRING,
          unique: true
        },
        email: {
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          type: Sequelize.STRING
        },
        status: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
