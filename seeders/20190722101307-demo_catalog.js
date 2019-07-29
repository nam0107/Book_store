'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('catalog',
      [
        {
          catalog_name: 'Sách văn học',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          catalog_name: 'Sách khoa học',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('catalog', null, {});
  }
};