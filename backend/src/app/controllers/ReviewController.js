import * as Yup from 'yup';

import User from '../models/User';
import Review from '../models/Review';

class ReviewController {
	async index(req, res) {
		const reviews = await Review.findAll({
			include: [
				{
					model: User,
					as: 'user',
					attributes: ['id', 'name', 'email'],
				},
			],
		});

		return res.json(reviews);
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			// space_id: Yup.string().required(),
			content: Yup.string().required(),
			stars: Yup.string().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation failed' });
		}

		const review = await Review.create({
			...req.body,
			user_id: req.user_id,
		});

		return res.json(review);
	}
}

export default new ReviewController();
