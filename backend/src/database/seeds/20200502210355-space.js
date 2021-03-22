'use strict';

const { v4 } = require('uuid');

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert('spaces', [
			{
				id: v4(),
				name: 'A nice place',
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('spaces', null, {});
	},
};
