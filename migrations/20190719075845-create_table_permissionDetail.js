'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'PermissionDetail',
      {
        permission_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'permission',
            key: 'permission_id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        role_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'role',
            key: 'role_id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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
    return queryInterface.dropTable('PermissionDetail');
  }
};
