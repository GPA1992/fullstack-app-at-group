'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
		[
			{
				nome: 'root',
				email: 'root@email.com',
				senha: '$2a$10$9BRN8/RqRxV5.B2T9P3npOZruw1ZPbJ/5e99D4JXLt.Sp4SH/m1EG', //'adm_password'
				avatar: 'https://avatars.dicebear.com/api/croodles/happy.jpg',
				data_de_nascimento: new Date('10/04/1992'),
				ativo: true
			},
		], {}),

	down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
