import feedbackService from '../services/feedback.service.js';
import { response } from '../utils/baseResponse.js';

class FeedbackController {
    async getAllFeedback(req,res,next) {
        try {
            const feedbacks = await feedbackService.getAllFeedback();

            res.status(200).json(response.success({ data: { feedbacks } }));
        } catch (err) {
            next(err);
        }
    }
}

export default new FeedbackController()