import mongoose from 'mongoose';

// Định nghĩa schema cho User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
//   fullName: {
//     type: String,
//     required: true,
//   },
  role: {
    type: String,
    enum: ['customer','staff', 'admin'],
    default: 'customer',
  },
}, {
  timestamps: true, // tự động thêm createdAt và updatedAt
});

// Tạo model User từ schema
const User = mongoose.model('users', userSchema);

// Hàm Create - Tạo người dùng mới
export const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error('Tạo người dùng thất bại: ' + error.message);
  }
};

// Hàm Read - Lấy thông tin người dùng theo ID
export const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('Không tìm thấy người dùng');
    return user;
  } catch (error) {
    throw new Error('Lỗi khi lấy người dùng: ' + error.message);
  }
};

// Hàm Update - Cập nhật thông tin người dùng
export const updateUser = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true, // Trả về bản ghi mới sau khi cập nhật
      runValidators: true, // Chạy các validator của schema
    });
    if (!updatedUser) throw new Error('Không tìm thấy người dùng để cập nhật');
    return updatedUser;
  } catch (error) {
    throw new Error('Cập nhật người dùng thất bại: ' + error.message);
  }
};

// Hàm Delete - Xóa người dùng
export const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) throw new Error('Không tìm thấy người dùng để xóa');
    return deletedUser;
  } catch (error) {
    throw new Error('Xóa người dùng thất bại: ' + error.message);
  }
};

// Hàm Read tất cả người dùng
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách người dùng: ' + error.message);
  }
};

export default User;
