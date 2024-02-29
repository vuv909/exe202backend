import express from 'express';
import orderController from '../../controllers/order.controller.js';

const orderRouter = express.Router();

orderRouter.get("/", orderController.getAll)
orderRouter.get("/shipper", orderController.getForShipper)
orderRouter.get("/member", orderController.getForMember)
orderRouter.post("/", orderController.createOrder);
orderRouter.patch("/", orderController.updateOrder);

export { orderRouter }