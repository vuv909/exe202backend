import Food from '../models/Food.js';
import Feedback from '../models/Feedback.js';

class FoodService {
  async addFood(data) {
    return await Food.create(data);
  }

  async getFoods() {
    return await Food.find({ isDelete: false });
  }

  async deleteFood(_id) {
    return !!(await Food.findOneAndUpdate({ _id }, { isDelete: true }));
  }

  async updateFood(data) {
    const { _id, ...updateData } = data
    return await Food.findOneAndUpdate({ _id }, updateData, { new: true });
  }

  async feedbackFood(data) {
    return await Feedback.create(data);
  }
}

export default new FoodService();
