import { Router } from 'express';
import * as sessionFeedbackController from '../controllers/sessionFeedbackController';

const router = Router();

router.get('/', sessionFeedbackController.getAllFeedback);
router.get('/:id', sessionFeedbackController.getFeedbackById);
router.post('/', sessionFeedbackController.createFeedback);
router.put('/:id', sessionFeedbackController.updateFeedback);
router.delete('/:id', sessionFeedbackController.deleteFeedback);

export default router;
