const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="w-full">
      <table className="w-[85vw] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Tên sản phẩm</th>
            <th className="px-6 py-3">Mô tả</th>
            <th className="px-6 py-3">Vai trò</th>
            <th className="px-6 py-3">Ảnh</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={product._id||index} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">
<img
                src={`http://localhost:9000/uploads/${product.image}`}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              </td>

              <td className="px-6 py-4">
                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(product._id)}
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
export default ProductList;
