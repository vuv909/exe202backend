// ** Express
import express from "express";

// ** Routes
import { userRouter } from "./user.router.js";
import { orderPublicRouter } from "./orderPublic.router.js";
import { feedbackPublicRouter } from "./feebackPublic.router.js";

const publicRouter = express.Router();

publicRouter.use("/user", userRouter);
publicRouter.use("/viewDetailOrder",orderPublicRouter)
publicRouter.use("/feedback",feedbackPublicRouter)

export { publicRouter };
