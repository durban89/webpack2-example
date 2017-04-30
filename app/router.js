import koaRouter from 'koa-router';
import DefaultController from './controllers/DefaultController';

const defaultController = new DefaultController();
const router = new koaRouter();

router.get('/', defaultController.index);
router.get('/:action', defaultController.index);

export default router;