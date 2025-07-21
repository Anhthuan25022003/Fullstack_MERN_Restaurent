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
      const order = await updateOrderService(req.params.id, req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
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
  