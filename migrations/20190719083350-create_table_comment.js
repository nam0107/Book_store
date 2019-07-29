'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comment',
      {
        cmt_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        content: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'user',
            key: 'user_id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        book_id: {
          type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('comment');
  }
};
