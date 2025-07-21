import express from 'express';
import upload from '../middlewares/productMiddleware.js';
import {
  createProductController,
  getProductByIdController,
  getAllProductsController,
  updateProductController,
  deleteProductController,
} from '../controllers/productController.js';

export const productRouter = express.Router();

productRouter.post('/', upload.single('image'), createProductController);
productRouter.put('/:id', upload.single('image'), updateProductController);
productRouter.get('/', getAllProductsController);
productRouter.get('/:id', getProductByIdController);
productRouter.delete('/:id', deleteProductController);
