import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

const OrderForm = ({ onSubmit, selectedOrder, onClose }) => {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products"
  });

  const [customers, setCustomers] = useState([]);
  const [tables, setTables] = useState([]);
  const [productsList, setProductsList] = useState([]);

  // Load danh sách khách hàng, bàn, sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      const [cusRes, tableRes, prodRes] = await Promise.all([
        axios.get("http://localhost:9000/api/users"),
        axios.get("http://localhost:9000/api/tables"),
        axios.get("http://localhost:9000/api/products"),
      ]);
      setCustomers(cusRes.data);
      setTables(tableRes.data);
      setProductsList(prodRes.data);
    };

    fetchData();
  }, []);

  // Reset form nếu có dữ liệu sửa
  useEffect(() => {
    if (selectedOrder) {
      reset(selectedOrder);
    }
  }, [selectedOrder, reset]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-xl"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          {selectedOrder ? "Sửa hóa đơn" : "Tạo hóa đơn"}
        </h2>

        {/* Khách hàng */}
        <select {...register("customerId", { required: "Chọn khách hàng" })} className="w-full border p-2 mb-2">
          <option value="">-- Chọn khách hàng --</option>
          {customers.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
        {errors.customerId && <p className="text-red-500 text-sm">{errors.customerId.message}</p>}

        {/* Bàn */}
        <select {...register("tableId", { required: "Chọn bàn" })} className="w-full border p-2 mb-2">
          <option value="">-- Chọn bàn --</option>
          {tables.map(t => (
            <option key={t._id} value={t._id}>{t.name}</option>
          ))}
        </select>
        {errors.tableId && <p className="text-red-500 text-sm">{errors.tableId.message}</p>}

        {/* Sản phẩm */}
        <div className="border p-2 mb-2">
          <h4 className="font-semibold mb-2">Sản phẩm</h4>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <select {...register(`products.${index}.productId`, { required: "Chọn sản phẩm" })} className="flex-1 border p-1">
                <option value="">Chọn món</option>
                {productsList.map(p => (
                  <option key={p._id} value={p._id}>{p.name}</option>
                ))}
              </select>

              <input
                type="number"
                {...register(`products.${index}.quantity`, { required: true, min: 1 })}
                placeholder="Số lượng"
                className="w-24 border p-1"
              />
              <button type="button" onClick={() => remove(index)} className="text-red-500">X</button>
            </div>
          ))}
          <button type="button" onClick={() => append({ productId: "", quantity: 1 })} className="bg-blue-500 text-white px-2 py-1 rounded">
            + Thêm món
          </button>
        </div>

        {/* Tổng tiền */}
        <input
          {...register("totalPrice", { required: "Tổng tiền bắt buộc" })}
          type="number"
          placeholder="Tổng tiền"
          className="w-full border p-2 mb-2"
        />
        {errors.totalPrice && <p className="text-red-500 text-sm">{errors.totalPrice.message}</p>}

        {/* Trạng thái */}
        <select {...register("status")} className="w-full border p-2 mb-4">
          <option value="pending">Đang chờ</option>
          <option value="processing">Đang xử lý</option>
          <option value="completed">Hoàn thành</option>
        </select>

        <div className="flex justify-end gap-4">
          <button type="button" onClick={onClose} className="bg-gray-400 text-white py-2 px-4 rounded">
            Hủy
          </button>
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
            {selectedOrder ? "Cập nhật" : "Tạo"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
