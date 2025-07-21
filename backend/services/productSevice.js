import {createProduct,deleteProduct,getAllProducts,getProductById,updateProduct} from '../models/productModel.js';

export const createProductService = async (productData) => {
  try {
    const product = await createProduct(productData);
    return product;
  } catch (error) {
    throw new Error('Tạo sản phẩm thất bại: ' + error.message);
  }
}

export const getProductByIdService = async (productId) => {
  try {
    const product = await getProductById(productId);
    return product;
  } catch (error) {
    throw new Error('Không tìm thấy sản phẩm: ' + error.message);
  }
}
 export const getAllProductsService = async () => {
  try {
    const products = await getAllProducts();
    return products;
  } catch (error) {
    throw new Error('Không thể lấy danh sách sản phẩm: ' + error.message);
  }
}

export const updateProductService = async (productId, updateData) => {
  try {
    const product = await updateProduct(productId, updateData);
    return product;
  } catch (error) {
    throw new Error('Cập nhật sản phẩm thất bại: ' + error.message);
  }
}

export const deleteProductService = async (productId) => {
  try {
    const product = await deleteProduct(productId);
    return product;
  } catch (error) {
    throw new Error('Xóa sản phẩm thất bại: ' + error.message);
  }
}