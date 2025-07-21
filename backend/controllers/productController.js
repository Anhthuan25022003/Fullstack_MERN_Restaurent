import {createProductService,deleteProductService,getAllProductsService,getProductByIdService,updateProductService} from '../services/productSevice.js';

export const createProductController = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : null;
    const productData = { ...req.body, image };
    const product = await createProductService(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : undefined;
    const updateData = { ...req.body };
    if (image) updateData.image = image;

    const product = await updateProductService(req.params.id, updateData);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteProductController = async (req, res) => {
  try {
    const product = await deleteProductService(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}   
