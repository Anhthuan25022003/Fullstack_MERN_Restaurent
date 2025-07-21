import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderForm from './OrderForm'; // Đảm bảo đã import đúng

const OrderDetail = () => {
  const [orderDetail, setOrderDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/orders/${id}`);
      setOrderDetail(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async (orderId) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá hóa đơn này?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:9000/api/orders/${orderId}`);
      alert("Xoá thành công!");
      navigate('/orders'); // quay lại danh sách
    } catch (err) {
      alert("Lỗi xoá hóa đơn");
      console.error(err);
    }
  };

  const handleUpdate = async (data) => {
    try {
      const payload = {
        customerId: data.customerId,
        tableId: data.tableId,
        products: data.products.map(p => ({
          productId: p.productId,
          quantity: Number(p.quantity)
        })),
        totalPrice: Number(data.totalPrice),
        status: data.status
      };
  
      await axios.put(`http://localhost:9000/api/orders/${data._id}`, payload);
      alert("Cập nhật thành công!");
    } catch (err) {
      console.error(err); // ← Xem lại payload hoặc lỗi từ backend
      alert("Lỗi khi cập nhật đơn hàng.");
    }
  };
  

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Hóa đơn #{orderDetail._id}</h2>
      <p>Tên khách hàng: {orderDetail.customerId?.name}</p>
      <p>Số bàn: {orderDetail.tableId?.name}</p>
      <p>Tổng tiền: {orderDetail.totalPrice}</p>
      <p>Ngày tạo: {new Date(orderDetail.createdAt).toLocaleDateString()}</p>

      <div className="mt-4">
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
        >
          Sửa
        </button>
        <button
          onClick={() => handleDelete(orderDetail._id)}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Xoá
        </button>
      </div>

      {isEditing && (
        <OrderForm
          onSubmit={handleUpdate}
          selectedOrder={orderDetail}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default OrderDetail;
