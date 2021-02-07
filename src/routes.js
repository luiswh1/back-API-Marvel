import { Router } from 'express';
import logMid from './app/middlewares/logRequests';
import marvelController from './app/service/marvelController';

const routes = new Router();

routes.use(logMid);

routes.get('/', (req, res) => {
    res.send('Rota principal');
});

routes.get('/personagens', marvelController.index);
routes.get('/personagens/:id', marvelController.show);

export default routes;