const TableList = ({ tables, onEdit, onDelete }) => {
  return (
    <div className="w-full">
      <table className="w-[85vw] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Số bàn</th>
            <th className="px-6 py-3">Số lượng chỗ ngồi</th>
            <th className="px-6 py-3">Trạng thái</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table._id} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900">{table.name}</td>
              <td className="px-6 py-4">{table.capacity}</td>
              <td className="px-6 py-4">{table.status}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onEdit(table)}
                  className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(table._id)}
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
export default TableList;
