import jwt from 'jsonwebtoken';
import tokenSecret from '../../config/jwt.config';
import { getErrorResult } from '../helpers';

// eslint-disable-next-line consistent-return
const authenticateToken = (req, res, next) => {
    // Gather the jwt access token from the request header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return getErrorResult(res, 401, '', 'User is not authorized');

    // eslint-disable-next-line consistent-return
    jwt.verify(token, tokenSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next(); // pass the execution off to whatever request the client intended
    });
};

export default authenticateToken;
