'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissiondetail',
      [
        {
          role_id: 1,
          permission_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 1,
          permission_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          permission_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissiondetail', null, {});
  }
};