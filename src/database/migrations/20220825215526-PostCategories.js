'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
        categoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'Categories',
            key: 'id',
          },
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Postcategories');
  }
};
