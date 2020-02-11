import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Erick Henrique',
    email: 'erickhenrique321@gmail.com',
    password_hash: '1851651',
  });
  return res.json(user);
});

export default routes;
