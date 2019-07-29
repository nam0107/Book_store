'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('love',
      [
        {
          user_id: 1,
          book_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          book_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          book_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('love', null, {});
  }
};