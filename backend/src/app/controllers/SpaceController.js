import Space from '../models/Space';

class SpaceController {
	async index(req, res) {
		try {
			const spaces = await Space.findAll();

			return res.json(spaces);
		} catch (error) {
			console.log(error);
		}
	}

	async show(req, res) {
		const { id } = req.params;

		const space = await Space.findByPk(id);

		return res.json(space);
	}
}

export default new SpaceController();
