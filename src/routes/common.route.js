import express from 'express';
import CommonController from '../controllers/common.controller';

const commonRouter = express.Router();
const commonController = new CommonController();

// Retrieve all Dashboard Data
commonRouter.post('/dashboard', commonController.getDashboard);

// Update Category Data
commonRouter.get('/info', commonController.getUserInformation);

export default commonRouter;
