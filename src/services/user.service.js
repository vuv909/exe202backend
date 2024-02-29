import { twilioClient } from '../configs/twilio.js';
import User from '../models/User.js';
import TwilioIns from '../models/Twillio.js';
import { formatPhone, getRandomSmsCode } from '../utils/index.js';

class UserService {
  async saveUser(data) {
    return await User.findOneAndUpdate(
      {
        uId: data.uid
      },
      data,
      {
        upsert: true,
        new: true
      }
    );
  }

  async getShippers() {
    return await User.find({ role: 'shipper' });
  }

  async addPhone(userId, phone) {
    const user = await User.findOne({ uId: userId });
    if (!user) throw new Error("User not found");

    user.phone = phone;

    await user.save();
  }

  async verifySmsCodeAndAddPhone(userId, code) {
    const user = await User.findOne({ uId: userId });
    if (!user) throw new Error("User not found");

    const twilio = await TwilioIns.findOne({ user: user.id, code });

    if (!twilio) throw new Error("Code khong dung");
    if (twilio.expireAt < new Date().valueOf()) throw new Error("Code da het han")

    user.phone = twilio.phone;
    await user.save();

    return {
      message: "Add phone successfully"
    }
  }
}

export default new UserService();
