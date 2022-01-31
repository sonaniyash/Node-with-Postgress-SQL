import jwt from 'jsonwebtoken';
import tokenSecret from '../../config/jwt.config';
import { getErrorResult } from '../helpers';

const tokenInfo = (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return getErrorResult(res, 401, '', 'User is not authorized');

    const user = jwt.verify(token, tokenSecret);
    return user;
};

export default tokenInfo;
