import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
    const [orderDetail,setOrderDetail]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        const fetchOrder= async()=>{
            const res = await axios.get(`http://localhost:9000/api/orders/${id}`)
            setOrderDetail(res.data)
          }
          fetchOrder();
    },[id])
  return (
    <div>
        <h2 className="text-lg font-bold">Hóa đơn #{orderDetail._id}</h2>
        <p>Tên khách hàng: {orderDetail.customerId?.name}</p>
        <p>Số bàn: {orderDetail.tableId?.name}</p>
        <p>Tổng tiền: {orderDetail.totalPrice}</p>
        {/* <p>Ngày tạo: {new Date(orderDetail.createdAt).toLocaleDateString()}</p>
        <button
            onClick={() => handleEdit(orderDetail)}
            className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
        >
            Sửa
        </button>
        <button
            onClick={() => handleDelete(orderDetail._id)}
            className="bg-red-600 text-white px-2 py-1 rounded"
        >
            Xoá
        </button> */}
    </div>
  )
}

export default OrderDetail