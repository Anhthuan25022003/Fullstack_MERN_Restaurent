// services/userService.js
import { createUser, getUserById, updateUser, deleteUser, getAllUsers } from '../models/userModel.js';

export const createUserService = async (userData) => {
  try {
    const user = await createUser(userData);
    return user;
  } catch (error) {
    throw new Error('Tạo người dùng thất bại: ' + error.message);
  }
};

export const getUserByIdService = async (userId) => {
  try {
    const user = await getUserById(userId);
    return user;
  } catch (error) {
    throw new Error('Không tìm thấy người dùng: ' + error.message);
  }
};

export const getAllUsersService = async () => {
  try {
    const users = await getAllUsers();
    return users;
  } catch (error) {
    throw new Error('Không thể lấy danh sách người dùng: ' + error.message);
  }
};

export const updateUserService = async (userId, updateData) => {
  try {
    const user = await updateUser(userId, updateData);
    return user;
  } catch (error) {
    throw new Error('Cập nhật người dùng thất bại: ' + error.message);
  }
};

export const deleteUserService = async (userId) => {
  try {
    const user = await deleteUser(userId);
    return user;
  } catch (error) {
    throw new Error('Xóa người dùng thất bại: ' + error.message);
  }
};
