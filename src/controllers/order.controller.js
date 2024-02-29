import orderService from '../services/order.service.js';
import { response } from '../utils/baseResponse.js';

class OrderController {
  async createOrder(req, res, next) {
    const data = req.body;
    try {
      const order = await orderService.createOrder(data);

      res.status(200).json(
        response.success({
          data: { order }
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    const { status } = req.query;
    try {
      const orders = await orderService.getAll(status.split(','));

      res.status(200).json(
        response.success({
          data: { orders }
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async getOrderById(req,res,next){
    const { orderId } = req.params;
    try {
      const order = await orderService.getOrderById(orderId);

      res.status(200).json(
        response.success({
          data: { order }
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async getForShipper(req, res, next) {
    const { user_id } = req.user;
    try {
      const orders = await orderService.getForShipper(user_id);

      res.status(200).json(
        response.success({
          data: {
            orders
          }
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async updateOrder(req, res, next) {
    const data = req.body;
    try {
      const order = await orderService.updateOrder(data);

      res.status(200).json(
        response.success({
          data: {
            order
          }
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async getForMember(req, res, next) {
    const { user_id } = req.user;
    try {
      const orders = await orderService.getForMember(user_id);

      res.status(200).json(
        response.success({
          data: {
            orders
          }
        })
      );
    } catch (err) {
      next(err);
    }
  }
}

export default new OrderController();
