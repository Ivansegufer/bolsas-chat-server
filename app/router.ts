import { Router } from 'express';
import login from './routes/login';
import register from './routes/register';
import logger from './middlewares/logger';

const router = Router();

router.use(logger);

router
    .route('/login')
        .post(login);

router
    .route('/register')
        .post(register);

export default router;