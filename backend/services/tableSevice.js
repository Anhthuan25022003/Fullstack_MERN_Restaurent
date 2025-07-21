import {createTable,deleteTable,getAllTables,getTableById,updateTable} from '../models/tableModel.js';

export const createTableService = async (tableData) => {
  try {
    const newTable = await createTable(tableData);
    return newTable;
  } catch (error) {
    throw new Error("Tạo bàn thất bại: " + error.message);
  }
}

export const getTableByIdService = async (tableId) => {
  try {
    const table = await getTableById(tableId);
    return table;
    }
    catch (error) {
    throw new Error("Lỗi khi lấy bàn: " + error.message); 
    }
}

export const getAllTablesService = async () => {
  try {
    const tables = await getAllTables();
    return tables;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bàn: " + error.message);
  }
}

export const updateTableService = async (tableId, updateData) => {
  try {
    const updatedTable = await updateTable(tableId, updateData);
    return updatedTable;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bàn: " + error.message);
  }
}

export const deleteTableService = async (tableId) => {
  try {
    const deletedTable = await deleteTable(tableId);
    return deletedTable;
  } catch (error) {
    throw new Error("Lỗi khi xóa bàn: " + error.message);
  }
}