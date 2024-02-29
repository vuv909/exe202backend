import express from 'express';
import orderController from '../../controllers/order.controller.js';

const orderPublicRouter = express.Router();


orderPublicRouter.get("/:orderId", orderController.getOrderById)


export { orderPublicRouter }