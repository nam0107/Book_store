'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'book',
      {
        book_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        book_name: {
          type: Sequelize.STRING,
        },
        author: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
        quatity: {
          type: Sequelize.INTEGER,
        },
        catalog_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'catalog',
            key: 'catalog_id'
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
    return queryInterface.dropTable('book');
  }
};
