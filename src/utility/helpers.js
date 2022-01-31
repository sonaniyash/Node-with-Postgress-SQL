import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';

import { EMAIL } from '../config/common.config';
import message from './errorMessage.json';

export const getErrorResult = (res, code, key, msg) => {
    const result = {
        message: msg || message[key],
    };
    return res.status(code).json(result);
};

export const getSuccessResult = (res, data, key) => {
    const result = {
        message: message[key],
        data,
    };
    return res.status(200).json(result);
};

export const randomGenerator = () => Math.floor(100000 + Math.random() * 900000);

export const sendEmail = (toAddress, subject, text, html) => {
    const transporter = nodemailer.createTransport({
        host: EMAIL.HOST,
        port: EMAIL.PORT,
        auth: {
            user: EMAIL.AUTH_USER,
            pass: EMAIL.AUTH_PASSWORD
        },
        secure: true
    });

    transporter
        .sendMail({
            from: `ServoFeat <${EMAIL.ADDRESS}>`, // sender address
            to: toAddress, // list of receivers
            subject, // Subject line
            text, // plain text body
            html // html body
        })
        .then((info) => {
            console.log({ info });
        })
        .catch(console.error);
};

export const generateOrderID = () => {
    const uuid = uuidv4().toString();
    return uuid.substring(0, 8).toUpperCase();
};
