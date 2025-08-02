import { Router } from 'express';
import * as settingsController from '../controllers/settingsController';

const router = Router();

router.get('/:userId', settingsController.getSettings);
router.put('/:userId', settingsController.updateSettings);

export default router;
