import { getErrorResult } from '../helpers';

const validateRequest = (req, res, next, schema) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        return getErrorResult(res, 400, '', error.details.map((x) => x.message).join(', '));
    }
    req.body = value;
    next();
};

export default validateRequest;
