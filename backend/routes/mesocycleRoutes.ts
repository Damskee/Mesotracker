import { Router } from 'express';
import * as mesocycleController from '../controllers/mesocycleController';

const router = Router();

router.get('/', mesocycleController.getAllMesocycles);
router.get('/:id', mesocycleController.getMesocycleById);
router.post('/', mesocycleController.createMesocycle);
router.put('/:id', mesocycleController.updateMesocycle);
router.delete('/:id', mesocycleController.deleteMesocycle);

export default router;
