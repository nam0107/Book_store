'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('book',
      [
        {
          book_name: 'Nhà giả kim',
          author: 'Nam',
          price: 100000,
          description: 'abc abc abc',
          image: 'link/image...',
          quatity: 6,
          catalog_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          book_name: 'Khoa học và xã hội',
          author: 'Nam',
          price: 169000,
          description: 'abc abc abc',
          image: 'link/image...',
          quatity: 8,
          catalog_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('book', null, {});
  }
};