import { Router } from 'express';
import {
  createBusinessPlan,
  getAllBusinessPlans,
  getBusinessPlanById,
  updateBusinessPlan,
  patchBusinessPlan,
  deleteBusinessPlan,
} from '../controllers/businessPlanController';
import { validate } from '../middleware/validate';
import {
  createBusinessPlanSchema,
  updateBusinessPlanSchema,
} from '../validators/businessPlan.validator';

const router = Router();

// Create a new business plan
router.post('/', validate(createBusinessPlanSchema), createBusinessPlan);

// Get all business plans (with pagination and optional userId filter)
router.get('/', getAllBusinessPlans);

// Get a single business plan by ID
router.get('/:id', getBusinessPlanById);

// Update a business plan (full update)
router.put('/:id', validate(updateBusinessPlanSchema), updateBusinessPlan);

// Partial update a business plan
router.patch('/:id', validate(updateBusinessPlanSchema), patchBusinessPlan);

// Delete a business plan
router.delete('/:id', deleteBusinessPlan);

export default router;
