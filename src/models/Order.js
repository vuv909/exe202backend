import mongoose from 'mongoose';

const { String, Date: MongooseDate, Boolean, ObjectId } = mongoose.Schema.Types;

const Order = mongoose.model(
  'Order',
  new mongoose.Schema(
    {
      shipper: {
        type: ObjectId,
        ref: 'User',
        required: true
      },
      items: [
        {
          id: ObjectId,
          name: String,
          price: Number,
          quantity: Number
        }
      ],
      // Dia chi nhan hang
      delivery_address: {
        type: String,
        default: null
      },
      // Phi ship
      fee_shipping: {
        type: Number,
        default: 0
      },
      // Giam gia
      discount: {
        type: Number,
        default: 0
      },
      // Hinh thuc thanh toan
      payment_detail: {
        type: String,
        enum: ["cash", "banking"],
        default: "cash"
      },
      customer_phone: {
        type: String,
        default: null
      },
      customer_email: {
        type: String,
        default: null
      },
      // Trang thai thanh toan
      payment_status: {
        type: Boolean,
        default: false
      },
      // Trang thai don hang
      status: {
        type: String,
        enum: ["confirm", "delivery_in_progress", "success", "rejected", "canceled"],
        default: "confirm"
      },
      time_confirm: {
        type: Date,
        default: Date.now()
      },
      time_delivery: {
        type: Date,
        default: null
      },
      time_success: {
        type: Date,
        default: null
      },
      time_rejected: {
        type: Date,
        default: null
      },
      time_canceled: {
        type: Date,
        default: null
      },
      reason: String
    },
    { timestamps: true }
  )
);

export default Order;
