'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [{
      name: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  }
};