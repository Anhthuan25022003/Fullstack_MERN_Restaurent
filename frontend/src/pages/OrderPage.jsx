import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
    const [orders,setOrders]=useState([])
    const nav=useNavigate();
    const fetchOrder= async()=>{
      const res = await axios.get('http://localhost:9000/api/orders')
      setOrders(res.data)
    }
    useEffect(()=>{
      fetchOrder();
    },[])
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
      {orders.map((order) => (
        <div key={order._id} className="border p-4 mb-4 " onClick={() => nav(`/orders/${order._id}`)}>
          <h2 className="text-lg font-bold"> #{order._id}</h2>
          <p>Tên khách hàng: {order.customerId?.name}</p>
          <p>Số bàn: {order.tableId?.name}</p>
          <p>Ngày tạo: {new Date(order.createdAt).toLocaleDateString()}</p>
          {/* <button
            onClick={() => handleEdit(order)}
            className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
          >
            Sửa
          </button>
          <button
            onClick={() => handleDelete(order._id)}
            className="bg-red-600 text-white px-2 py-1 rounded"
          >
            Xoá
          </button> */}
        </div>
      ))}
    </div>
  )
}

export default OrderPage