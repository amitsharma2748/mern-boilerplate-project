// Example: src/controllers/product.controller.ts

import Product from '../models/product.model';

// Create product
export const createProduct = async (data: {
  name: string;
  description: string;
  price: number;
  category?: string;
}) => {
  const product = new Product(data);
  return await product.save();
};

// Get all products
export const getProducts = async () => {
  return await Product.find();
};
