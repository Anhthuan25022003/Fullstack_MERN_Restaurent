import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  status: {
    type: String,
    enum: ["available", "reserved", "occupied"],
    default: "available",
  }
},
  {
    timestamps: true,
  }
)

const Table = mongoose.model("tables", tableSchema);

export const createTable = async (tableData) => {
  try {
    const newTable = new Table(tableData);
    await newTable.save();
    return newTable;
  } catch (error) {
    throw new Error("Tạo bàn thất bại: " + error.message);
  }
}

export const getTableById = async (tableId) => {
  try {
    const table = await Table.findById(tableId);
    if (!table) throw new Error("Không tìm thấy bàn");
    return table;
    }

  catch (error) {
    throw new Error("Lỗi khi lấy bàn: " + error.message);
  }
}

export const getAllTables = async () => {
  try {
    const tables = await Table.find();
    return tables;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bàn: " + error.message);
  }
}

export const updateTable = async (tableId, updateData) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(tableId, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedTable) throw new Error("Không tìm thấy bàn để cập nhật");
    return updatedTable;
    }
    catch (error) {
    throw new Error("Lỗi khi cập nhật bàn: " + error.message);
    }
}
export const deleteTable = async (tableId) => {
  try {
    const deletedTable = await Table.findByIdAndDelete(tableId);
    if (!deletedTable) throw new Error("Không tìm thấy bàn để xóa");
    return deletedTable;
  } catch (error) {
    throw new Error("Lỗi khi xóa bàn: " + error.message);
  }
}
