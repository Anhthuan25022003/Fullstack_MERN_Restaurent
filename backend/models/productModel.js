import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
    required: true,
  },
  image: {
    type: String,
  },
}, {
  timestamps: true, // tự động thêm createdAt và updatedAt
});

const Product = mongoose.model('products', productSchema);

export const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error('Tạo sản phẩm thất bại: ' + error.message);
  }
}

export const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) throw new Error('Không tìm thấy sản phẩm');
    return product;
    }
    catch (error) {
    throw new Error('Lỗi khi lấy sản phẩm: ' + error.message);
    }
}

export const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error('Không thể lấy danh sách sản phẩm: ' + error.message);
  }
}

export const updateProduct = async (productId, updateData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
      runValidators: true,
    })
    if (!updatedProduct) throw new Error('Không tìm thấy sản phẩm để cập nhật');
    return updatedProduct;
    }catch (error) {
    throw new Error('Cập nhật sản phẩm thất bại: ' + error.message);
  }
}
export const deleteProduct = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) throw new Error('Không tìm thấy sản phẩm để xóa');
    return deletedProduct;
    }catch (error) {
    throw new Error('Xóa sản phẩm thất bại: ' + error.message); 
    }
}

export default Product;