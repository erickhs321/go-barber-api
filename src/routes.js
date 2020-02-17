import { Router } from 'express';

import User from './app/models/User';
import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
