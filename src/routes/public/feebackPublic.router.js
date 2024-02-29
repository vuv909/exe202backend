import express from 'express';
import feedbackController from '../../controllers/feedback.controller.js';

const feedbackPublicRouter = express.Router();


feedbackPublicRouter.get("/getAll", feedbackController.getAllFeedback)


export { feedbackPublicRouter }