'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'orderdetail',
      {
        order_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'order',
            key: 'order_id'
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
        amount: {
          type: Sequelize.INTEGER,
        },
        quatity: {
          type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('orderdetail');
  }
};
