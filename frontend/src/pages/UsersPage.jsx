import { useState, useEffect } from "react";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";
import axios from "axios";
import Modal from "react-modal";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Lỗi lấy user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddOrUpdate = async (data) => {
    try {
      if (selectedUser) {
        await axios.put(
          `http://localhost:9000/api/users/${selectedUser._id}`,
          data
        );
      } else {
        await axios.post("http://localhost:9000/api/users", data);
      }
      setIsOpen(false); // Đóng modal sau khi xong
      setSelectedUser(null); // Reset form
      await fetchUsers(); // Cập nhật lại danh sách
    } catch (error) {
      console.error("Lỗi:", error.message);
    }
    console.log("data from form",data)
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc muốn xoá?")) {
      await axios.delete(`http://localhost:9000/api/users/${userId}`);
      await fetchUsers();
    }
  };

  const handleAddNew = () => {
    setSelectedUser(null); // reset form
    setIsOpen(true); // mở modal
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý người dùng</h1>
      <button
        onClick={handleAddNew}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Thêm nhân viên
      </button>

      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        isOpen={isOpen}
        style={{
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
        }}
        className="modal"
      >
        <UserForm
          onSubmit={handleAddOrUpdate}
          selectedUser={selectedUser}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default UsersPage;
