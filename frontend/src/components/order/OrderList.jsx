const OrderList = ({ orders, onEdit, onDelete }) => {
  return (
    <div className="w-full">
      <table className="w-[85vw] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Số hóa đơn</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Vai trò</th>
            <th className="px-6 py-3">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900">{order.name}</td>
              <td className="px-6 py-4">{order.email}</td>
              <td className="px-6 py-4">{order.role}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onEdit(order)}
                  className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(order._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderList;
