// src/models/product.model.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category?: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema: Schema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    inStock: { type: Boolean, default: true }
  },
  {
    timestamps: true, // auto add createdAt and updatedAt,
    collection:"product"
  }
);

const Product = mongoose.model<IProduct>('Producr', productSchema);

export default Product;
