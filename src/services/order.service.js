import mongoose from 'mongoose';
import Feedback from '../models/Feedback.js';
import Order from '../models/Order.js';
import User from '../models/User.js';

class OrderService {
  async createOrder(data) {
    return await Order.create(data);
  }

  async getAll(status) {
    return await Order.find({ status: { $in: status } })
      .populate('shipper')
      .exec();
  }

  async getForShipper(userId) {
    const user = await User.findOne({ uId: userId });
    return await Order.find({ shipper: user.id, status: { $in: ['confirm', 'delivery_in_progress'] } });
  }

  async updateOrder(data) {
    const { _id, status, ...updateData } = data;
    const docs = { ...updateData, status };

    switch (status) {
      case "confirm":
        docs.time_confirm = new Date();
        break;
      case "delivery_in_progress":
        docs.time_delivery = new Date();
        break;
      case "success":
        docs.time_success = new Date();
        break;
      case "rejected":
        docs.time_rejected = new Date();
        break;
      case "canceled":
        docs.time_canceled = new Date();
        break;
      default:
        break;
    }

    return await Order.findOneAndUpdate({ _id }, docs, { new: true });
  }

  async getForMember(userId) {
    const user = await User.findOne({ uId: userId });
    let orders = await Order.find({ customer_email: user?.email })
      .sort({ createdAt: -1 })
      .exec();

    orders = await Promise.all(
      orders.map(async order => {
        const feedback = await Feedback.findOne({ order: order.id });
        return {
          ...order.toJSON(),
          feedback
        };
      })
    );

    return orders;
  }

  async getOrderById(orderId) {
    let order = await Order.findOne({ _id: new mongoose.Types.ObjectId(orderId) });
    return order;
  }
}

export default new OrderService();
