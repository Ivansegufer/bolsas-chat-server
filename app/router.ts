import { Router } from 'express';
import logger from './middlewares/logger';
import { login, register } from './controllers/userController';

const router = Router();

router.use(logger);

router
    .route('/login')
        .post(login);

router
    .route('/register')
        .post(register);

export default router;