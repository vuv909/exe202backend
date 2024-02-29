import mongoose from 'mongoose';

const { String, Date, Boolean, ObjectId, Number } = mongoose.Schema.Types;

const Twilio = mongoose.model(
  'Twilio',
  new mongoose.Schema(
    {
      user: {
        type: ObjectId,
        ref: 'User',
        required: true
      },
      code: {
        type: String,
        required: true
      },
      phone: String,
      expireAt: Number
    },
    { timestamps: true, expireAfterSeconds: 120 }
  )
);

export default Twilio;
