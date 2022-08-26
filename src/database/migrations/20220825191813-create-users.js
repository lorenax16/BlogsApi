'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'O email deve ser Unico'
        },
        validate: {
          isEmail: {
            msg: 'Email Invalido'
          },
          notEmpty: {
            msg: 'Escreva o email'
          }
        },
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

// validar o email https://es.stackoverflow.com/questions/364894/sequelize-validar-email-unico
