import mongoose from 'mongoose';

const { String, Date, Boolean, ObjectId } = mongoose.Schema.Types;

const User = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      uId: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      phone: {
        type: String,
        required: false,
        unique: true,
      },
      fullName: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        default: 'Male'
      },
      dob: {
        type: Date,
        default: null
      },
      address: {
        type: String,
        required: false,
        default: null
      },
      picture: {
        type: String,
        default: null
      },
      provider: {
        type: String,
        default: null
      },
      role: {
        type: String,
        enum: ['member', 'shiper', 'admin'],
        default: 'member'
      },
      isDelete: {
        type: Boolean,
        default: false
      }
    },
    { timestamps: true }
  )
);

export default User;
