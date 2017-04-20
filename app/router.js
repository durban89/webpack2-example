import koaRouter from 'koa-router';
import DefaultController from './controllers/DefaultController';

const defaultController = new DefaultController();
const router = new koaRouter();

router.get('/home', defaultController.index);

export default router;