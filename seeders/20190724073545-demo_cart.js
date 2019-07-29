'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cart',
      [
        {
          user_id: 1,
          total_amount: 100000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          total_amount: 269000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cart', null, {});
  }
};