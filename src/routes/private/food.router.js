import express from 'express';
import foodController from '../../controllers/food.controller.js';

const foodRouter = express.Router();

foodRouter.post("/", foodController.createFood);
foodRouter.get("/", foodController.getFoods);
foodRouter.delete("/", foodController.deleteFood);
foodRouter.put("/", foodController.updateFood)

export { foodRouter }