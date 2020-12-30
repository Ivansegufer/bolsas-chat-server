import { Router } from 'express';
import login from './routes/login';
import register from './routes/register';
import logger from './utils/logger';

const router = Router();

router.use(logger);

router
    .route('/login')
        .get(login);

router
    .route('/register')
        .get(register);

export default router;