import express from 'express';
import authenticate from '../utility/jwt/authenticationMiddleware';
import CommonRouter from './common.route';

const router = express.Router();

router.use('/user', authenticate, CommonRouter);

export default router;
