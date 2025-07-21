import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';

// Tính tổng tiền từ danh sách sản phẩm
const calculateTotalPrice = async (products) => {
  let total = 0;

  for (const item of products) {
    const product = await Product.findById(item.productId);
    if (!product) throw new Error(`Không tìm thấy sản phẩm với ID: ${item.productId}`);
    total += product.price * item.quantity;
  }

  return total;
};

export const createOrderService = async (orderData) => {
  try {
    const totalPrice = await calculateTotalPrice(orderData.products);
    const order = new Order({ ...orderData, totalPrice });
    await order.save();
    return order;
  } catch (error) {
    throw new Error('Tạo đơn hàng thất bại: ' + error.message);
  }
};

export const getAllOrdersService = async () => {
  try {
    return await Order.find()
      .populate('customerId', 'name')     // Lấy tên khách hàng
      .populate('tableId', 'name') // Lấy số bàn
      .populate('products.productId');    // Lấy thông tin sản phẩm
  } catch (error) {
    throw new Error('Lỗi khi lấy danh sách đơn hàng: ' + error.message);
  }
};


export const getOrderByIdService = async (orderId) => {
  try {
    const order = await Order.findById(orderId).populate('customerId', 'name')     // Lấy tên khách hàng
      .populate('tableId', 'name') // Lấy số bàn
      .populate('products.productId');    // Lấy thông tin sản phẩm;
    if (!order) throw new Error('Không tìm thấy đơn hàng');
    return order;
  } catch (error) {
    throw new Error('Lỗi khi lấy đơn hàng: ' + error.message);
  }
};

export const updateOrderService = async (orderId, updateData) => {
  try {
    if (updateData.products) {
      updateData.totalPrice = await calculateTotalPrice(updateData.products);
    }

    const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) throw new Error('Không tìm thấy đơn hàng để cập nhật');
    return updatedOrder;
  } catch (error) {
    throw new Error('Cập nhật đơn hàng thất bại: ' + error.message);
  }
};

export const deleteOrderService = async (orderId) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) throw new Error('Không tìm thấy đơn hàng để xóa');
    return deletedOrder;
  } catch (error) {
    throw new Error('Xóa đơn hàng thất bại: ' + error.message);
  }
};
