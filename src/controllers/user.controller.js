import { ApiError } from '../helpers/errHandle.js';
import userService from '../services/user.service.js';
import { response } from '../utils/baseResponse.js';

class UserController {
  async saveUser(req, res, next) {
    const { email, fullName, picture, uid, provider } = req.body;

    try {
      const user = await userService.saveUser({
        email,
        fullName,
        picture,
        uid,
        provider
      });

      res.status(200).json(
        response.success({
          data: { user }
        })
      );
    } catch (err) {
      next(new ApiError(400, err?.message));
    }
  }

  async getShippers(req, res, next) {
    try {
      const shippers = await userService.getShippers();

      res.status(200).json(
        response.success({
          data: { shippers }
        })
      );
    } catch (err) {
      next(new ApiError(400, err?.message));
    }
  }

  async addPhone(req, res, next) {
    const { user_id } = req.user;
    const { phone } = req.body;

    try {
      await userService.addPhone(user_id, phone);

      res.status(200).json(response.success({}));
    } catch (err) {
      next(new ApiError(400, err?.message));
    }
  }

  async verifyCodePhone(req, res, next) {
    const { user_id } = req.user;
    const { code } = req.body;

    try {
      const data = await userService.verifySmsCodeAndAddPhone(user_id, code);

      res.status(200).json(
        response.success({
          data
        })
      );
    } catch (err) {
      next(new ApiError(400, err?.message));
    }
  }
}

export default new UserController();
