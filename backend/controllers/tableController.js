import {createTableService,deleteTableService,getAllTablesService,getTableByIdService,updateTableService} from '../services/tableSevice.js';

export const createTableController = async (req, res) => {
  try {
    const table = await createTableService(req.body);
    res.status(201).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export const getTableByIdController = async (req, res) => {
  try {
    const table = await getTableByIdService(req.params.id);
    res.status(200).json(table);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllTablesController = async (req, res) => {
  try {
    const tables = await getAllTablesService();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const updateTableController = async (req, res) => {
  try {
    const table = await updateTableService(req.params.id, req.body);
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export const deleteTableController = async (req, res) => {
  try {
    const table = await deleteTableService(req.params.id);
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}