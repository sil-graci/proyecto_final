import { Router } from 'express';
import { loginCtrl } from '../controllers/auth.controller.js';

const router = Router();
router.post('/login', loginCtrl);
export default router;
