'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('reviews', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV1,
			},
			content: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			stars: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			user_id: {
				type: Sequelize.UUID,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: false,
			},
			space_id: {
				type: Sequelize.UUID,
				references: { model: 'spaces', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('reviews');
	},
};
