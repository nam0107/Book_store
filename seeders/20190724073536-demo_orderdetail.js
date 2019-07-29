'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderdetail',
      [
        {
          order_id: 1,
          book_id: 1,
          quatity: 1,
          amount: 100000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          order_id: 2,
          book_id: 1,
          quatity: 1,
          amount: 100000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          order_id: 2,
          book_id: 2,
          quatity: 1,
          amount: 169000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderdetail', null, {});
  }
};