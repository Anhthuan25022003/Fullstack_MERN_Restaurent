import {
    createOrderService,
    deleteOrderService,
    getAllOrdersService,
    getOrderByIdService,
    updateOrderService,
  } from '../services/orderSevice.js';
  
  export const createOrderController = async (req, res) => {
    try {
      const order = await createOrderService(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await getAllOrdersService();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getOrderByIdController = async (req, res) => {
    try {
      const order = await getOrderByIdService(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const updateOrderController = async (req, res) => {
    try {
      const { customerId, tableId, products, totalPrice, status } = req.body;
      if (!customerId || !tableId || !Array.isArray(products) || !totalPrice) {
        return res.status(400).json({ message: "Thiếu thông tin" });
      }
      const updated = await Order.findByIdAndUpdate(
        req.params.id,
        { customerId, tableId, products, totalPrice, status },
        { new: true }
      );
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Lỗi server", error });
    }
  };
  
  export const deleteOrderController = async (req, res) => {
    try {
      const order = await deleteOrderService(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  