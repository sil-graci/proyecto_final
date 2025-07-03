import { Router } from 'express';
import * as ctrl from '../controllers/products.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', verifyJWT, ctrl.getProducts);
router.get('/:id', verifyJWT, ctrl.getProduct);
router.post('/create', verifyJWT, ctrl.createProduct);
router.put('/:id', verifyJWT, ctrl.updateProduct);
router.delete('/:id', verifyJWT, ctrl.deleteProduct);

export default router;
