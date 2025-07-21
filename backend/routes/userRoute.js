// routes/userRoutes.js
import express from 'express';
import { 
  createUserController, 
  getUserByIdController, 
  getAllUsersController, 
  updateUserController, 
  deleteUserController 
} from '../controllers/userController.js';

export const userRouter = express.Router();

// Các route cho các API về user
userRouter.post('/', createUserController);         // Tạo người dùng mới
userRouter.get('/', getAllUsersController);         // Lấy tất cả người dùng
userRouter.get('/:id', getUserByIdController);     // Lấy thông tin người dùng theo ID
userRouter.put('/:id', updateUserController);      // Cập nhật thông tin người dùng
userRouter.delete('/:id', deleteUserController);   // Xóa người dùng


