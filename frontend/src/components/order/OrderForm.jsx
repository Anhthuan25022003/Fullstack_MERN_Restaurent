import { useForm } from "react-hook-form";
import { useEffect } from "react";

const OrderForm = ({ onSubmit, selectedTable, onClose }) => {
  const { register, handleSubmit, reset,formState: { errors } } = useForm();

  useEffect(() => {
    reset(selectedTable || {});
  }, [selectedTable, reset]);
{console.log(selectedTable)}
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 bg-white rounded shadow-md w-full max-w-md gap-y-4"
      >
        <h2 className="text-xl font-bold text-center">
          {selectedTable ? "Sửa người dùng" : "Thêm người dùng"}
        </h2>

        <input {...register("name", { required: "Họ tên không được bỏ trống" })} placeholder="Họ tên" className="border border-gray-300"/>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        <input {...register("email", { required: "Email không được để trống" })} placeholder="Email" type="email" className="border border-gray-300"/>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

        <input
          {...register("password", { required: !selectedTable && "Mật khẩu không được để trống" })}
          placeholder="Mật khẩu"
          type="password" className="border border-gray-300"
        />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

        <select {...register("role")} className="border border-gray-300">
          <option value="" disabled hidden >
            Chức vụ
          </option>
          <option value="customer">Customer</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <div className="flex justify-end gap-4  ">
          <button
            type="button"
            className="bg-gray-400 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded"
          >
            {selectedTable ? "Cập nhật" : "Thêm"}
          </button>
        </div>
      </form>
    </div>
  );
};


export default OrderForm;
