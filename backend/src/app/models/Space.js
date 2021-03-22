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
			},
			{
				sequelize,
			}
		);

		return this;
	}
}

export default Review;
