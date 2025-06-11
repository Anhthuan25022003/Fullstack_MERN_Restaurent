import { useState, useEffect } from "react";

import axios from "axios";
import Modal from "react-modal";
import TableForm from "../components/table/TableForm";
import TableList from "../components/table/TableList";

const TablePage = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tables, settables] = useState([]);


  const fetchTables = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/tables");
      settables(res.data);
    } catch (err) {
      console.error("Lỗi lấy Table:", err);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const handleAddOrUpdate = async (data) => {
    try {
      if (selectedTable) {
        await axios.put(`http://localhost:9000/api/tables/${selectedTable._id}`, data);
      } else {
        await axios.post("http://localhost:9000/api/tables", data);
      }
      setIsOpen(false);       // Đóng modal sau khi xong
      setSelectedTable(null);  // Reset form
      fetchTables();           // Cập nhật lại danh sách
    } catch (error) {
      console.error("Lỗi:", error.message);
    }
  };

  const handleDelete = async (tableId) => {
    if (window.confirm("Bạn có chắc muốn xoá?")) {
      await axios.delete(`http://localhost:9000/api/tables/${tableId}`);
      fetchTables();
    }
  };

  const handleAddNew = () => {
    setSelectedTable(null); // reset form
    setIsOpen(true);       // mở modal
  };

  const handleEdit = (table) => {
    setSelectedTable(table);
    setIsOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý bàn</h1>
      <button
        onClick={handleAddNew}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Thêm bàn
      </button>

      <TableList tables={tables} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}   style={{
    overlay: {
      position: "fixed",
      zIndex: 9999,
      backgroundColor: "rgba(0, 0, 0, 0)",
      marginLeft: 0,
    },
    content: {
      inset: "auto",
      padding: 0,
      background: "transparent",
      border: "none",
      overflow: "visible",
    },
  }}   className="modal">
        <TableForm onSubmit={handleAddOrUpdate} selectedTable={selectedTable} onClose={()=>setIsOpen(false)} />
      </Modal>
      
    </div>
  );
};

export default TablePage;
