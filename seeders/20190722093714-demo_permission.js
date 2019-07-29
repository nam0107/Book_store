'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permission',
      [
        {
          type_permission: 'create_catalog',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'read_catalog',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'update_catalog',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'delete_catalog',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'create_book',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'read_book',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'update_book',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: 'delete_book',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permission', null, {});
  }
};