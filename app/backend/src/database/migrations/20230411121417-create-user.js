'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
  },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_de_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
