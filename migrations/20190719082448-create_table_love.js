'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'love',
      {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'user',
            key: 'user_id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        book_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'book',
            key: 'book_id'
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
    return queryInterface.dropTable('love');
  }
};
