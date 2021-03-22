import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV1,
					primaryKey: true,
				},
				name: DataTypes.STRING,
				email: DataTypes.STRING,
				password: DataTypes.VIRTUAL,
				password_hash: DataTypes.STRING,
			},
			{
				sequelize,
			}
		);

		this.addHook('beforeSave', async user => {
			if (user.password) {
				user.password_hash = await bcrypt.hash(user.password, 8);
			}

			user.name = user.name.toLocaleUpperCase();
			user.email = user.email.toLocaleUpperCase();
		});

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}
}

export default User;
