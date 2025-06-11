import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductForm = ({ onSubmit, selectedProduct, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(selectedProduct || {});
  }, [selectedProduct, reset]);
  {
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 bg-white rounded shadow-md w-full max-w-md gap-y-4"
      >
        <h2 className="text-xl font-bold text-center">
          {selectedProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        </h2>

        <input
          {...register("name", {
            required: "Tên sản phẩm không được bỏ trống",
          })}
          placeholder="Tên sản phẩm"
          className="border border-gray-300"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
        <input
          {...register("description")}
          placeholder="Mô tả "
          className="border border-gray-300"
        />
        <input
          {...register("price", { required: "Giá không được để trống",  validate: value => parseFloat(value) >= 0 || "Giá phải lớn hơn hoặc bằng 0"
 })}
          placeholder="Giá "
          className="border border-gray-300"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
        <input
          {...register("image")}
          placeholder="Ảnh "
          className="border border-gray-300"
          type="file"
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}

{/* <select {...register("categoryId", { required: "Loại sản phẩm là bắt buộc" })} className="border border-gray-300">
  <option value="" disabled hidden>
    Loại sản phẩm
  </option>
  <option value="Food">Thức ăn</option>
  <option value="Drinks">Đồ uống</option>
  <option value="Other">Khác</option>
</select>
{errors.categoryId && (
  <p className="text-red-500 text-sm mt-1">{errors.categoryId.message}</p>
)} */}

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
            {selectedProduct ? "Cập nhật" : "Thêm"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
