// ** Express
import express from 'express';
import { foodRouter } from './food.router.js';
import { orderRouter } from './order.router.js';
import { userRouter } from '../public/user.router.js';
import { feedbackRouter } from './feedback.router.js';

// ** Routes

const privateRouter = express.Router();

privateRouter.use('/food', foodRouter);
privateRouter.use('/order', orderRouter);
privateRouter.use("/user", userRouter);
privateRouter.use("/feedback", feedbackRouter);

export { privateRouter };
