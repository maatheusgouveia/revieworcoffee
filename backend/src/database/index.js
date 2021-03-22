import Sequelize from 'sequelize';

import User from '../app/models/User';
import Space from '../app/models/Space';
import Review from '../app/models/Review';

import databaseConfig from '../config/database';

const models = [User, Review, Space];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models.map(model => model.init(this.connection));

		models.map(
			model => model.associate && model.associate(this.connection.models)
		);
	}
}

export default new Database();
