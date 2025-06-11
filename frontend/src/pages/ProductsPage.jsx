import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Lỗi lấy product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddOrUpdate = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", parseFloat(data.price) || 0);
      formData.append("categoryId", data.categoryId);

      // Image là mảng FileList, lấy phần tử đầu
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      if (selectedProduct) {
        await axios.put(
          `http://localhost:9000/api/products/${selectedProduct._id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        await axios.post("http://localhost:9000/api/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setIsOpen(false);
      setSelectedProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Lỗi:", error.response?.data || error.message);
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Bạn có chắc muốn xoá?")) {
      await axios.delete(`http://localhost:9000/api/products/${productId}`);
      fetchProducts();
    }
  };

  const handleAddNew = () => {
    setSelectedProduct(null); // reset form
    setIsOpen(true); // mở modal
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>
      <button
        onClick={handleAddNew}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Thêm sản phẩm
      </button>

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0)",
            marginLeft: 0,
          },
          content: {
            inset: "auto",
            padding: 0,
            background: "transparent",
            border: "none",
            overflow: "visible",
          },
        }}
        className="modal"
      >
        <ProductForm
          onSubmit={handleAddOrUpdate}
          selectedProduct={selectedProduct}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ProductsPage;
