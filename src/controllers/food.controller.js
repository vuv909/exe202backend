import FoodService from '../services/food.service.js';
import { response } from '../utils/baseResponse.js';

class FoodController {
  async createFood(req, res, next) {
    const data = req.body;
    try {
      const food = await FoodService.addFood(data);

      res.status(200).json(response.success({ data: { food } }));
    } catch (err) {
      next(err);
    }
  }

  async getFoods(req, res, next) {
    try {
      const foods = await FoodService.getFoods();

      res.status(200).json(response.success({ data: { foods } }));
    } catch (err) {
      next(err);
    }
  }

  async deleteFood(req, res, next) {
    const { id } = req.query;
    try {
      const isSuccess = await FoodService.deleteFood(id);

      res.status(200).json(response.success({ isSuccess }));
    } catch (err) {
      next(err);
    }
  }

  async updateFood(req, res, next) {
    const data = req.body;
    try {
      const food = await FoodService.updateFood(data);

      res.status(200).json(
        response.success({
          data: {
            food
          }
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async feedbackFood(req, res, next) {
    const data = req.body;
    try {
      const fb = await FoodService.feedbackFood(data);

      res.status(200).json(
        response.success({
          data: {
            fb
          }
        })
      );
    } catch (err) {
      next(err);
    }
  }
}

export default new FoodController();
