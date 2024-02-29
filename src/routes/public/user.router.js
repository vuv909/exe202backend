import express from "express";
import userController from "../../controllers/user.controller.js";

const userRouter = express.Router();

// Public
userRouter.post("/", userController.saveUser);
userRouter.get("/shipper", userController.getShippers);

// Private
userRouter.post("/phone", userController.addPhone);
userRouter.patch("/phone", userController.verifyCodePhone);

export { userRouter };