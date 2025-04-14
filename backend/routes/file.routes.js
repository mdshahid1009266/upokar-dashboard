import express from 'express';
import { addProduct, deleteProduct, deleteProductImage } from '../controllers/file.controllers.js';
import { upload } from '../middlewares/file.middleware.js';

const router = express.Router();

// Route to create a product.
router.post('/products', upload.array('images', 3), addProduct);

// Route to delete an entire product (and its images).
router.delete('/products/:id', deleteProduct);

// Route to delete a specific product image.
router.delete('/products/:productId/images/:imageId', deleteProductImage);

export default router;
