import { useForm } from "react-hook-form";
import { useEffect } from "react";

const TableForm = ({ onSubmit, selectedTable, onClose }) => {
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
          {selectedTable ? "Sửa bàn" : "Thêm bàn"}
        </h2>

        <input {...register("name", { required: "Số bàn không được bỏ trống" })} placeholder="Số bàn" className="border border-gray-300"/>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        <input {...register("capacity", { required: "Số lượng không được để trống",validate: value => parseFloat(value) >= 0 || "Số lượng phải lớn hơn hoặc bằng 0" })} placeholder="Số lượng chỗ ngồi"className="border border-gray-300"/>
                  {errors.capacity && <p className="text-red-500 text-sm mt-1">{errors.capacity.message}</p>}
        <select {...register("status")} className="border border-gray-300">
          <option value="" disabled hidden >
            Trạng thái
          </option>
          <option value="reserved">Đã hết</option>
          <option value="available">Có sẵn</option>
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


export default TableForm;
