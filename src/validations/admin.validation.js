import Joi from 'joi';
import validateRequest from '../utility/jwt/validationMiddleware';

// eslint-disable-next-line import/prefer-default-export
export const loginSchema = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, res, next, schema);
};
