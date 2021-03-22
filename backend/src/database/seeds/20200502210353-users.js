'use strict';

const { v4 } = require('uuid');

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert('users', [
			{
				id: v4(),
				name: 'test user',
				email: 'test@test.com',
				// 123456
				password_hash:
					'$2a$08$UWWyHHa7C.M2t8V54fQ2B.x/uWWBgXoxyn62aFQ/NOql5aKrCFZZS',
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('users', null, {});
	},
};
