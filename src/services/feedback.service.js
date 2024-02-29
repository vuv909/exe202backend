import Feedback from "../models/Feedback.js";

class FeedbackService {
    async getAllFeedback() {
        return await Feedback.find()
            .populate({
                path: 'user',
                model: 'User'
            })
            .populate({
                path: 'order',
                model: 'Order',
                populate: {
                    path: 'items.id',
                    model: 'Food'
                }
            });
    }
}


export default new FeedbackService();