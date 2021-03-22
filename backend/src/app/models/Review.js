import { Model, DataTypes } from 'sequelize';

class Review extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV1,
					primaryKey: true,
				},
				name: DataTypes.STRING,
				content: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				user_id: {
					type: DataTypes.UUID,
					references: { model: 'users', key: 'id' },
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE',
					allowNull: false,
				},
				space_id: {
					type: DataTypes.UUID,
					references: { model: 'spaces', key: 'id' },
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE',
					allowNull: false,
				},
			},
			{
				sequelize,
			}
		);

		return this;
	}
}

export default Review;
