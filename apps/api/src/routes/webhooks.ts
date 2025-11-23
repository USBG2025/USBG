import { Router } from 'express';
import { stripePaymentCompleted } from '../controllers/webhooksController';

const router = Router();

router.post('/stripe', stripePaymentCompleted);

export default router;
