import express from "express";
import {createTableController,deleteTableController,getAllTablesController,getTableByIdController,updateTableController} from '../controllers/tableController.js'
export const tableRouter = express.Router()


tableRouter.post('/', createTableController);         // Tạo sản phẩm mới
tableRouter.get('/', getAllTablesController);         // Lấy tất cả sản phẩm    
tableRouter.get('/:id', getTableByIdController);     // Lấy thông tin sản phẩm theo ID
tableRouter.put('/:id', updateTableController);      // Cập nhật thông tin sản phẩm
tableRouter.delete('/:id', deleteTableController);   // Xóa sản phẩm