import mongoose from 'mongoose';

const { String, Date, Boolean, ObjectId, Number } = mongoose.Schema.Types;

const Feedback = mongoose.model(
  'Feedback',
  new mongoose.Schema(
    {
      user: {
        type: ObjectId,
        ref: 'User',
        required: true
      },
      order: {
        type: ObjectId,
        ref: 'Order',
        required: true
      },
      rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
      comment: {
        type: String,
        default: null
      }
    },
    { timestamps: true }
  )
);

export default Feedback;
