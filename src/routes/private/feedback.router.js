import express from 'express';
import foodController from '../../controllers/food.controller.js';

const feedbackRouter = express.Router();

feedbackRouter.post("/", foodController.feedbackFood);

export { feedbackRouter }