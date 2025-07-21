import express from 'express';
import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  getOrderByIdController,
  updateOrderController
} from '../controllers/orderController.js';

export const orderRouter = express.Router();

orderRouter.post('/', createOrderController);           // Tạo đơn hàng
orderRouter.get('/', getAllOrdersController);           // Lấy tất cả đơn hàng
orderRouter.get('/:id', getOrderByIdController);        // Lấy đơn theo ID
orderRouter.put('/:id', updateOrderController);         // Cập nhật đơn hàng
orderRouter.delete('/:id', deleteOrderController);      // Xóa đơn hàng
