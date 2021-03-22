import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SpaceController from './app/controllers/SpaceController';
import ReviewController from './app/controllers/ReviewController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.send('Review or Coffee'));

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.get('/reviews', ReviewController.index);

routes.get('/spaces', SpaceController.index);
routes.get('/spaces/:id', SpaceController.show);

routes.use(authMiddleware);

routes.post('/reviews', ReviewController.store);

export default routes;
