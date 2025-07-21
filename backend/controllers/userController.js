// controllers/userController.js
import { createUserService, getUserByIdService, getAllUsersService, updateUserService, deleteUserService } from '../services/userSevice.js';

// Tạo người dùng mới
export const createUserController = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    console.log(user);
    res.status(200).json({message: 'API post from Controller',user})  }
     catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy thông tin người dùng theo ID
export const getUserByIdController = async (req, res) => {
  try {
    const user = await getUserByIdService(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Lấy tất cả người dùng
export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin người dùng
export const updateUserController = async (req, res) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa người dùng
export const deleteUserController = async (req, res) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
